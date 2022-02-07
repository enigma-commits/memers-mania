import "./App.css";
import { Box } from "@mui/system";
import ResponsiveAppBar from "./Navbar/ResponsiveAppBar";
import { CreatePost } from "./CreatePost";
import Post from "./Post";
export default function App() {
  return (
    <Box
      sx={{
        backgroundColor: "#1c1f20",
        minHeight: "100vh",
      }}
    >
      <Box component="header" sx={{ position: "sticky", top: 0, zIndex: 50 }}>
        <ResponsiveAppBar />
      </Box>
      <Box component="body">
        <CreatePost />
        <Post />
        <Post />
        <Post />
        <Post />
      </Box>
    </Box>
  );
}
