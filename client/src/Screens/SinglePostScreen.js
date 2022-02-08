import { Box } from "@mui/system";
import React from "react";
import SinglePost from "../Components/SinglePost";
import { Comment } from "../Components/Comment";
import { CommentBox } from "../Components/CommentBox";

export const SinglePostScreen = () => {
  return (
    <Box component="div">
      <SinglePost image={"./tempimages/1116286.jpg"} />
      <CommentBox />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Box>
  );
};
