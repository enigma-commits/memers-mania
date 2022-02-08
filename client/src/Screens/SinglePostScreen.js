import { Box } from "@mui/system";
import React from "react";
import SinglePost from "../Components/SinglePost";
import { Comment } from "../Components/Comment";

export const SinglePostScreen = () => {
  return (
    <Box component="div">
      <SinglePost image={"./tempimages/1116286.jpg"} />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Box>
  );
};
