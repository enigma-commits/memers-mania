import express from "express";
import mongoose from "mongoose";

const router = express.Router();

const Post = mongoose.model("Post");
const User = mongoose.model("User");

router.get("/", async (req, res) => {
	const users = await User.find({});
	res.json(users);
});

router.post("/", async (req, res) => {
	const { name, email, password, isAdmin } = req.body;
	console.log(req.body);
	const newUser = new User({
		name,
		email,
		password,
		isAdmin,
	});
	const savedUser = await newUser.save();
	res.json(savedUser);
});



export default router;
