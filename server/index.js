import express from "express";
import connectDB from "./config/connectDB.js";
import dotenv from "dotenv";
import colors from "colors";
import {OAuth2Client} from 'google-auth-library'
import mongoose from "mongoose";

import "./models/userModel.js";
import "./models/postModel.js";

import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import bodyParser from "body-parser";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

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
