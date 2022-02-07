import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import "./App.css";
import Container from "@mui/material/Container";
import { TextField, Button } from "@mui/material";
export function CreatePost() {
	return (
		<Container
			sx={{
				width: "50%",
				ml: "25%",
				mt: "2%",
				border: "15px",
				borderColor: "red",
				backgroundColor: "#1a1a1b",
				display: "flex",
				justifyContent: "space-evenly",
				borderRadius: "5px",
				padding: "10px",
			}}>
			<Avatar
				sx={{
					marginTop: "8px",
				}}
			/>

			<TextField
				fullWidth
				id='fullWidth'
				size='small'
				placeholder='Create Post'
				sx={{
					marginTop: "8px",
					height: "100%",
					width: "50%",
					borderRadius: "5px",
					backgroundColor: "#bdbdbd",
				}}
			/>
			<Button
				variant='contained'
				sx={{ width: "5%", mr: "1%", ml: "1%", mt: "10px", height: "5%" }}>
				Post
			</Button>
		</Container>
	);
}
