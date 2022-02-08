import React from "react";
import { Box } from "@mui/system";
import { CreatePost } from "../Components/CreatePost.js";
import Post from "../Components/Post.js";
import { useNavigate } from "react-router-dom";
const HomeScreen = (props) => {
  const navigate = useNavigate();
  const sendToSingleScreen = (event) => {
    props.changeImage("./tempimages/1116286.jpg");
    navigate("/comment");
  };
  return (
    <>
      <Box component="body">
        <CreatePost />
        <Post image="./tempimages/1116286.jpg" sender={sendToSingleScreen} />
        <Post image="./tempimages/1123078.jpg" />
        <Post image="./tempimages/1139591.jpg" />
        <Post image="./tempimages/1140982.jpg" />
        <Post image="./tempimages/1141570.png" />
        <Post image="./tempimages/gojo i will murder you.png" />
      </Box>
    </>
  );
};

export default HomeScreen;
