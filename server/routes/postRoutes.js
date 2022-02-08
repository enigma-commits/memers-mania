import express from "express";
import mongoose from "mongoose";

const router = express.Router();

const Post = mongoose.model("Post");
const User = mongoose.model("User");

router.get("/", (req, res) => {
	res.send("hello from postRoutes");
});

export default router;
