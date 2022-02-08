import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import Post from "../Components/Post";
import { Comment } from "../Components/Comment";
import { CommentBox } from "../Components/CommentBox";
import useFocus from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const SinglePostScreen = () => {
	//const [inputRef, setInputFocus] = useFocus();
	const [post, setPost] = useState({});
  const {id}=useParams();
	useEffect(() => {
    console.log(id)
		const fetchPost = async () => {
			const { data } = await axios.get(`/api/posts/${id}`);
			setPost(data);
		};
		fetchPost();
	}, []);
	return (
		<Box component='div'>
			<Post post={post} />
			<Comment />
			<Comment />
			<Comment />
			<Comment />
		</Box>
	);
};

export default SinglePostScreen;
