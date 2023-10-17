import React, { useState } from "react";
import {
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const RegisterPage = ({ setLoggedInUser, setLoggedUsers}) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    setLoggedUsers([{username, password}])
    setLoggedInUser({ username });
    alert("Compte créé avec succès !");
    navigate("/profile");
  };

  return (
    <div className="container">
      <Paper elevation={3} className="login-container">
        <Typography variant="h5" component="div">
          Inscription
        </Typography>
        <form onSubmit={handleRegister}>
          <TextField
            label="Nom"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Prénom"
            variant="outlined"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Date de naissance"
            variant="outlined"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
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
          <TextField
            type="password"
            label="Confirmer le mot de passe"
            variant="outlined"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            S'inscrire
          </Button>
        </form>
        <Typography variant="body1" component="div">
          Déjà un compte ? <Link to="/login">Connectez-vous</Link>
        </Typography>
      </Paper>
    </div>
  );
};

export default RegisterPage;
