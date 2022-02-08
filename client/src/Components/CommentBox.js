import React from "react";
import { Container, Avatar, TextField, Button } from "@mui/material";
export const CommentBox = () => {
  return (
    <Container
      sx={{
        width: "80%",
        ml: "15%",
        mt: "2%",
        border: "15px",
        borderColor: "red",
        backgroundColor: "#1a1a1b",
        display: "flex",
        justifyContent: "space-evenly",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <Avatar
        sx={{
          marginTop: "8px",
          mr: "8px",
        }}
      />

      <TextField
        fullWidth
        id="fullWidth-multiline"
        size="small"
        placeholder="Body"
        multiline
        rows={4}
        sx={{
          marginTop: "10px",
          height: "100%",
          width: "100%",
          borderRadius: "5px",
          backgroundColor: "#948f8f",
        }}
      />
      <Button
        variant="contained"
        sx={{ width: "5%", mr: "1%", ml: "1%", mt: "10px", height: "5%" }}
      >
        Post
      </Button>
    </Container>
  );
};
