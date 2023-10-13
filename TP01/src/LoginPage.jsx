import React, { useState } from "react";
import { Paper, TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const foundUser = registeredUsers.find((user) => user.username === username && user.password === password);

    if (foundUser) {
      setMessage("Connexion réussie !");
      setMessageStyle({ color: "green" });
      navigate("/search-flight");
    } else {
      setMessage("Nom d'utilisateur ou mot de passe incorrect.");
      setMessageStyle({ color: "red" });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setRegisteredUsers([...registeredUsers, { username, password }]);

    setMessage("Compte créé avec succès. Vous pouvez maintenant vous connecter.");
    setMessageStyle({ color: "green" });
    setIsRegistering(false);

    setUsername("");
    setPassword("");
  };

  const [messageStyle, setMessageStyle] = useState({});

  return (
    <div className="container">
      <Paper elevation={3} className="login-container">
        <Typography variant="h5" component="div">
          {isRegistering ? "Inscription" : "Connexion"}
        </Typography>
        <form onSubmit={isRegistering ? handleRegister : handleLogin}>
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
            {isRegistering ? "S'inscrire" : "Se connecter"}
          </Button>
        </form>
        {isRegistering ? (
          <Typography variant="body1" component="div">
            Vous avez déjà un compte ?{" "}
            <Button color="primary" onClick={() => setIsRegistering(false)}>
              Connectez-vous
            </Button>
          </Typography>
        ) : (
          <Typography variant="body1" component="div">
            Pas de compte ?{" "}
            <Button color="primary" onClick={() => setIsRegistering(true)}>
              S'inscrire
            </Button>
          </Typography>
        )}
        <Typography variant="body1" component="div" style={messageStyle}>
          {message}
        </Typography>
      </Paper>
    </div>
  );
};

export default LoginPage;
