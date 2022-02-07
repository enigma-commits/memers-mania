import React from "react";
import { Box } from "@mui/system";
import ResponsiveAppBar from "../Components/Navbar/ResponsiveAppBar";
import { CreatePost } from "../Components/CreatePost.js";
import Post from "../Components/Post";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#1c1f20",
          minHeight: "100vh",
        }}
      >
        <Box component="header" sx={{ position: "sticky", top: 0, zIndex: 50 }}>
          <ResponsiveAppBar />
        </Box>
        <Box component="body">
          <CreatePost />
          <Post image="./tempimages/1116286.jpg" />
          <Post image="./tempimages/1123078.jpg" />
          <Post image="./tempimages/1139591.jpg" />
          <Post image="./tempimages/1140982.jpg" />
          <Post image="./tempimages/1141570.png" />
          <Post image="./tempimages/gojo i will murder you.png" />
        </Box>
      </Box>
    </>
  );
};

export default Home;
