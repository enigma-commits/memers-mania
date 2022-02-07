import * as React from "react";
import Box from "@mui/material/Box";
import "./App.css";
import { TextField, Button, Input } from "@mui/material";
export function CreatePost() {
	return (
		<Box
			sx={{
				width: "100vw",
				marginLeft: "-10px",
				marginTop: "-10px",
				height: "50px",
				backgroundColor: "#1a1a1b",
				display: "flex",
				justifyContent: "center",
			}}>
			<TextField
				id='outlined-basic'
				variant='outlined'
				label='create post'
				sx={{
					width: "50%",
					backgroundColor: "#d7d3ce",
					border: "10px black",
				}}
			/>
			<Button variant='contained' sx={{ width: "5%", mr: "1%", ml: "1%" }}>
				Post
			</Button>
			<Input
				accept='image/*'
				id='contained-button-file'
				multiple
				type='file'
				sx={{ backgroundColor: "#d7d3ce" }}
			/>
			<Button variant='contained' component='span' sx={{ mr: "1%", ml: "1%" }}>
				Upload
			</Button>
		</Box>
	);
}
