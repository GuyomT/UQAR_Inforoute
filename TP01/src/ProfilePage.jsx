import React from "react";
import { Paper, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfilePage = ({ loggedInUser, setLoggedInUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedInUser(null);
    navigate("/login");
  };

  return (
    <div className="container">
      <Paper elevation={3} className="login-container">
        <Typography variant="h5" component="div">
          Bienvenue, {loggedInUser && loggedInUser.username}
        </Typography>
        <Typography variant="body1" component="div">
          Solde actuel: 0 CAD {/* Vous pouvez afficher le solde de l'utilisateur ici */}
        </Typography>
        <Button variant="contained" fullWidth>
          Déposer de l'argent
        </Button>
        <Button variant="contained" fullWidth onClick={handleLogout}>
          Se déconnecter
        </Button>
      </Paper>
    </div>
  );
};

export default ProfilePage;