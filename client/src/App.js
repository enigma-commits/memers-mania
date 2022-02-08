import "./App.css";
import React, { useState } from "react";
import HomeScreen from "./Screens/HomeScreen.js";
import CreatePostScreen from "./Screens/CreatePostScreen.js";
import DashBoardScreen from "./Screens/DashBoardScreen.js";
import { Box } from "@mui/system";
import ResponsiveAppBar from "./Components/Navbar/ResponsiveAppBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SinglePostScreen } from "./Screens/SinglePostScreen";

export default function App() {
  const [image, changeImage] = useState();
  console.log(image);
  return (
    <Router>
      <Box
        sx={{
          backgroundColor: "#1c1f20",
          minHeight: "100vh",
        }}
      >
        <Box component="header" sx={{ position: "sticky", top: 0, zIndex: 50 }}>
          <ResponsiveAppBar />
        </Box>
        <Routes>
          <Route path="/" element={<HomeScreen changeImage={changeImage} />} />
          <Route path="/profile" element={<DashBoardScreen />} />
          <Route path="/create" element={<CreatePostScreen />} />
          <Route path="/comment" element={<SinglePostScreen image={image} />} />
        </Routes>
      </Box>
    </Router>
  );
}
