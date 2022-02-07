import React from "react";
import { Box } from "@mui/system";
import ResponsiveAppBar from "../Components/Navbar/ResponsiveAppBar";
import { CreatePost } from "../Components/CreatePost.jsx";
import Post from "../Components/Post";

const Home = () => {
	return (
		<>
			<Box
				sx={{
					backgroundColor: "#1c1f20",
					minHeight: "100vh",
				}}>
				<Box component='header' sx={{ position: "sticky", top: 0, zIndex: 50 }}>
					<ResponsiveAppBar />
				</Box>
				<Box component='body'>
					<CreatePost />
					<Post />
					<Post />
					<Post />
					<Post />
				</Box>
			</Box>
		</>
	);
};

export default Home;
