import express from "express";
import connectDB from "./config/connectDB.js";
import dotenv from "dotenv";
import colors from "colors";
import {OAuth2Client} from 'google-auth-library'

import "./models/userModel.js";
import "./models/postModel.js";

import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();

connectDB();

const app = express();
const client = new OAuth2Client(process.env.CLIENT_ID);
const users = []
app.use(express.json());
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

// Store the information of Users.
function upsert(array, item){
	// Check if the item is already there in the users array.
	const index = array.findItem((_item)=> _item.email===item.email);

	// If yes then update that user else add that user to the array.
	if(i>-1)	array[i] = item;
	else		array.push(item);
}

// Handle login.
app.post('/api/google-login',async(req,res)=>{
	const {token} = req.body
	const ticket = await client.verifyIdToken({
		idToken: token,
		audience:process.env.CLIENT_ID,
	});
	const {name, email, pictures} = ticket.getPayLoad();
	upsert(users,{name,email,pictures});
	res.status(201);
	res.json({name,email,pictures});
})

// Home page 
app.get("/", (req, res) => {
	res.send("Api is running......");
});

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
	console.log(
		`Server running in ${process.env.NODE_ENV} mode at port ${PORT}`.yellow.bold
	);
});
