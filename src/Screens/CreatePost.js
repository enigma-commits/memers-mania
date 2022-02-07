import React from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
const CreatePost = () => {
	return (
        
		<>
			<Container
				sx={{
					width: "50%",
					ml: "25%",
					mt: "2%",
					color: "white",
					border: "15px",
					borderColor: "red",
					backgroundColor: "#242424",
					borderRadius: "5px",
					padding: "10px",
				}}>
				<h2>Create Post</h2>
				<Divider sx={{ backgroundColor: "white" }} />
				<Container
					sx={{
						border: "15px",
						display: "flex",
						justifyContent: "space-around",
					}}>
					<container>
						<h3>Text</h3>
						<Divider sx={{ backgroundColor: "white" }} />
					</container>
					<container>
						<h3>Image</h3>
					</container>
				</Container>
				<Container>
					<TextField
						fullWidth
						id='fullWidth'
						size='small'
						placeholder='Title'
						sx={{
							marginTop: "8px",
							height: "100%",
							width: "100%",
							borderRadius: "5px",
							backgroundColor: "#948f8f",
						}}
					/>
					<TextField
						fullWidth
						id='fullWidth-multiline'
						size='small'
						placeholder='Body'
						multiline
						rows={4}
						sx={{
							marginTop: "8px",
							height: "100%",
							width: "100%",
							borderRadius: "5px",
							backgroundColor: "#948f8f",
						}}
					/>
					<Container sx={{ display: "flex", justifyContent: "flex-end" }}>
						<Button
							variant='contained'
							sx={{
								width: "5%",
								mt: "10px",
								height: "5%",
							}}>
							Post
						</Button>
					</Container>
				</Container>
			</Container>
		</>
	);
};

export default CreatePost;
