import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Outlet, Link, Navigate } from "react-router-dom";
import NavBar from "./NavBar";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ProfilePage from "./ProfilePage";
import SearchFlight from "./SearchFlight";
import SearchHotel from "./SearchHotel";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff",
    },
    secondary: {
      main: "#ff6f61",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 16,
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
  },
});

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loggedUsers, setLoggedUsers] = useState([]);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
        <Routes>
          <Route path="login" element={<LoginPage setLoggedInUser={setLoggedInUser} loggedUsers={loggedUsers}/>} />
          <Route path="register" element={<RegisterPage setLoggedInUser={setLoggedInUser} setLoggedUsers={setLoggedUsers}/>} />
          <Route path="profile" element={<ProfilePage setLoggedInUser={setLoggedInUser}/>} />
          <Route path="search-flight" element={<SearchFlight />} />
          <Route path="search-hotel" element={<SearchHotel />} />
          <Route path="*" element={<Navigate to="login" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
