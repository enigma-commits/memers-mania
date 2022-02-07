import "./App.css";

import Home from "./Screens/Home.js";
import CreatePost from "./Screens/CreatePost.js";
import Dashboard from "./Screens/Dashboard.js";

import { Box } from "@mui/system";
import ResponsiveAppBar from "./Components/Navbar/ResponsiveAppBar";
export default function App() {
	return (
		<Box
			sx={{
				backgroundColor: "#1c1f20",
				minHeight: "100vh",
			}}>
			<Box component='header' sx={{ position: "sticky", top: 0, zIndex: 50 }}>
				<ResponsiveAppBar />
			</Box>
			<Dashboard />
		</Box>
	);
}
