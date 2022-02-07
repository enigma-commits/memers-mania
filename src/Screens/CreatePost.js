import React from "react";
import Container from "@mui/material/Container";
const CreatePost = () => {
	return (
		<>
			<Container
				sx={{
					width: "50%",
					ml: "25%",
					mt: "2%",
					border: "15px",
					borderColor: "red",
					backgroundColor: "#242424",
					display: "flex",
					justifyContent: "space-evenly",
					borderRadius: "5px",
					padding: "10px",
				}}>
				<h2>Create Post</h2>
			</Container>
		</>
	);
};

export default CreatePost;
