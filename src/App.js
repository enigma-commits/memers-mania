import "./App.css";
import { Box } from "@mui/system";
import ResponsiveAppBar from "./Navbar/ResponsiveAppBar";
import { CreatePost } from "./CreatePost";
import Post from "./Post";
export default function App() {
  return (
    <Box sx={{ backgroundColor: "#121212", m: "0" }}>
      <Box component="header">
        <ResponsiveAppBar />
      </Box>
      <Box component="body">
        <CreatePost />
        <Post />
        <Post />
      </Box>
    </Box>
  );
}
