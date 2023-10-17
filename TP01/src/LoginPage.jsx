import React, { useState } from "react";
import {
  Paper,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = ({ setLoggedInUser, loggedUsers }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (loggedUsers.find((user) => user.username === username && user.password === password)) {
      setLoggedInUser({ username });
      navigate("/profile");
    } else {
      alert("Nom d'utilisateur ou mot de passe incorrect.");
    }
  };

  return (
    <div className="container">
      <Paper elevation={3} className="login-container">
        <Typography variant="h5" component="div">
          Connexion
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Nom d'utilisateur"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            type="password"
            label="Mot de passe"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Se connecter
          </Button>
        </form>
        <Typography variant="body1" component="div">
          Pas de compte ?{" "}
          <Link to="/register">S'inscrire</Link>
        </Typography>
      </Paper>
    </div>
  );
};

export default LoginPage;
