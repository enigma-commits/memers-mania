import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FileUpload from "react-material-file-upload";

const CreatePostScreen = () => {
	const [tab, setTab] = useState(0);
	const [postTitle, setPostTitle] = useState("");
	const [postBody, setPostBody] = useState("");
	const [postImage, setPostImage] = useState([]);
	const func = (e) => {
		setPostImage(e);
	};
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
						<h3
							onClick={() => {
								setTab(0);
							}}>
							Text
						</h3>
						{tab === 0 && <Divider sx={{ backgroundColor: "white" }} />}
					</container>
					<container>
						<h3
							onClick={() => {
								setTab(1);
							}}>
							Image
						</h3>
						{tab === 1 && <Divider sx={{ backgroundColor: "white" }} />}
					</container>
				</Container>
				<Container>
					<TextField
						fullWidth
						id='fullWidth'
						size='small'
						placeholder='Title'
						value={postTitle}
						sx={{
							marginTop: "8px",
							height: "100%",
							width: "100%",
							borderRadius: "5px",
							backgroundColor: "#948f8f",
						}}
						onChange={(e) => {
							setPostTitle(e.target.value);
						}}
					/>
					{tab === 0 && (
						<TextField
							fullWidth
							id='fullWidth-multiline'
							size='small'
							placeholder='Body'
							multiline
							rows={4}
							value={postBody}
							sx={{
								marginTop: "10px",
								height: "100%",
								width: "100%",
								borderRadius: "5px",
								backgroundColor: "#948f8f",
							}}
							onChange={(e) => {
								setPostBody(e.target.value);
							}}
						/>
					)}
					{tab === 1 && (
						<>
							<FileUpload
								value={postImage}
								onChange={func}
								sx={{
									marginTop: "10px",
									borderRadius: "5px",
									backgroundColor: "#948f8f",
								}}
							/>
						</>
					)}

					<Container
						sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
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

export default CreatePostScreen;
