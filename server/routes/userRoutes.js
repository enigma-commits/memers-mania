import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import {OAuth2Client} from 'google-auth-library'
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const router = express.Router();

const Post = mongoose.model("Post");
const User = mongoose.model("User");

const client = new OAuth2Client(process.env.CLIENT_ID);

// Verify Token
const verifyToken = (req,res,next)=>{
	// Get auth header value.
	const bearerHeader = req.headers['authorization'];

	// Check if bearer  is undefined.
	if(typeof bearerHeader !== 'undefined'){
		// Split at the space.
		const bearer = bearerHeader.split(' ');
		// Get token from the array.
		const bearerToken = bearer[1];
		req.token = bearerToken;
		next();
	}else{
		// Forbidden
		res.sendStatus(403);
	}
}

router.get("/", (req, res) => {
  res.send("hello from userRoutes");
});

// Store the information of Users.
async function upsert(item){
	// Check if the item is already there in the users array.
	const foundUser = User.findOne(item);
	if(foundUser){
		const updateUser = await User.findOneAndUpdate(
			{_id:foundUser._id},
			{jwtToken:item.jwtToken}
		)
	}else{
		const {name, email, pictures, jwtToken} = item
		const newUser = new User({
			name,
			email,
			pictures,
			jwtToken,
		})
		const savedUser = newUser.save();
	}
}

// Handle login.
router.post("/google-login", async (req, res) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  const { name, email, pictures } = ticket.getPayload();
  const jwtToken = jwt.sign({name,email,pictures}, process.env.SECRET_KEY, {expiresIn: '1h'});
  upsert({ name, email, pictures,jwtToken});
  res.status(201);
  res.send({ name, email, pictures,jwtToken});
});

export default router;
