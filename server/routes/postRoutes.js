import express from "express";
import mongoose from "mongoose";

const router = express.Router();

const Post = mongoose.model("Post");
const User = mongoose.model("User");

router.get("/", async (req, res) => {
	const posts=await Post.find({}).populate('user');
	res.json(posts);
});

router.get("/:id", async (req, res) => {
	const { id } = req.params;
	console.log(id);
	const post = await Post.findById( id);
	res.json(post);

});

router.post("/", async (req, res) => {
	const { user, title, body } = req.body;
	const newPost = new Post({ user, title, body });
	const savedPost = await newPost.save();
	res.json(savedPost);
});



export default router;
