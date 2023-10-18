import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Outlet, Link, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "./NavBar";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ProfilePage from "./ProfilePage";
import SearchFlight from "./SearchFlight";
import SearchHotel from "./SearchHotel";
import UserManager from "./UserManager";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF5777",
    },
    secondary: {
      main: "#ffffff", 
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 16,
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
  },
});

function App() {
  const userManager = new UserManager();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar userManager={userManager} />
        <Routes>
          <Route path="login" element={<LoginPage userManager={userManager}/>} />
          <Route path="register" element={<RegisterPage userManager={userManager}/>} />
          <Route path="profile" element={<ProfilePage userManager={userManager}/>} />
          <Route path="search-flight" element={<SearchFlight />} />
          <Route path="search-hotel" element={<SearchHotel />} />
          <Route path="*" element={<Navigate to="login" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
