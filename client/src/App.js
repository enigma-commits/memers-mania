import "./App.css";
import React, { useState,useEffect } from "react";
import HomeScreen from "./Screens/HomeScreen.js";
import CreatePostScreen from "./Screens/CreatePostScreen.js";
import DashBoardScreen from "./Screens/DashBoardScreen.js";
import { Box } from "@mui/system";
import ResponsiveAppBar from "./Components/Navbar/ResponsiveAppBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SinglePostScreen } from "./Screens/SinglePostScreen";
import { GoogleLogin } from "react-google-login";
import { Typography } from "@mui/material";
import { gapi } from "gapi-script";



export default function App() {
  const [image, changeImage] = useState();

  // Get data from the localStorage regarding the login
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  // Handle login Failure function
  const handleFailure = (result) => {
    console.log(result);
  };

  // Handle login function to call the api.
  const handleLogin = async (googleData) => {
    const res = await fetch("/api/google-login", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setLoginData(data);
    localStorage.setItem("loginData", JSON.stringify(data));
  };
  const handleLogout = () => {
    localStorage.removeItem("loginData");
    setLoginData(null);
  };

  return (
    <Box>
      {loginData ? (
        <Router>
          <Box
            sx={{
              backgroundColor: "#1c1f20",
              minHeight: "100vh",
            }}
          >
            <Box
              component="header"
              sx={{ position: "sticky", top: 0, zIndex: 50 }}
            >
              <ResponsiveAppBar />
            </Box>
            <Routes>
              <Route
                path="/"
                element={<HomeScreen changeImage={changeImage} />}
              />
              <Route path="/profile" element={<DashBoardScreen />} />
              <Route path="/create" element={<CreatePostScreen />} />
              <Route
                path="/comment"
                element={<SinglePostScreen image={image} />}
              />
            </Routes>
          </Box>
        </Router>
      ) : (
        <Box sx={{display:'flex', justifyContent:'center', minHeight:'100vh', alignItems:'center', backgroundColor:'#A5C9CA', flexDirection:'column'}}>
          <Typography variant="h2" component="h2">Login with Google</Typography><br/>
          <GoogleLogin
            clientId={process.env.REACT_APP_CLIENT_ID}
            buttonText="Login/Sign Up with google"
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={"single_host_origin"}
          />
        </Box>
      )}
    </Box>
  );
}
