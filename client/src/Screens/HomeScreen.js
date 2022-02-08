import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { CreatePost } from "../Components/CreatePost.js";
import Post from "../Components/Post.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HomeScreen = (props) => {
	const [posts, setPosts] = useState([]);
	const navigate = useNavigate();
	const sendToSingleScreen = (event) => {
		props.changeImage("./tempimages/1116286.jpg");
		navigate("/comment");
	};
	useEffect(() => {
		const fetchPosts = async () => {
			const { data } = await axios.get("/api/posts");
			setPosts(data);
		};
		fetchPosts();
	}, []);

	return (
		<>
			<Box component='body'>
				<CreatePost />
				{posts.map((post) => {
					return <Post id={post._id} post={post} />;
				})}
			</Box>
		</>
	);
};

export default HomeScreen;
