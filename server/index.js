import express from "express";
import connectDB from "./config/connectDB.js";
import dotenv from "dotenv";
import colors from "colors";

import "./models/userModel.js";
import "./models/postModel.js";

import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
	res.send("Api is running......");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(
		`Server running in ${process.env.NODE_ENV} mode at port ${PORT}`.yellow.bold
	);
});
