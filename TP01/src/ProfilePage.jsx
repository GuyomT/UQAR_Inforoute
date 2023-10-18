import React, { useState } from "react";
import {
  Paper,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfilePage = (props) => {
  const navigate = useNavigate();
  const { userManager } = props;
  const [editedUser, setEditedUser] = useState(userManager.currentUser); // Utilisez userManager.currentUser

  const handleLogout = () => {
    userManager.logout();
    navigate("/login");
  };

  const handleUpdateProfile = () => {
    const updateResult = userManager.updateUser(editedUser);
    if (updateResult) {
      alert("Profil mis à jour avec succès !");
    } else {
      alert("Une erreur est survenue.");
    }
  };

  return (
    <div className="container">
      <Paper elevation={3} className="login-container">
        <Typography variant="h5" component="div">
          Bienvenue, {userManager.currentUser && userManager.currentUser.username}
        </Typography>
        <TextField
          label="Nom"
          variant="outlined"
          fullWidth
          margin="normal"
          value={editedUser.name}
          onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
        />
        <TextField
          label="Prénom"
          variant="outlined"
          fullWidth
          margin="normal"
          value={editedUser.surname}
          onChange={(e) => setEditedUser({ ...editedUser, surname: e.target.value })}
        />
        <TextField
          label="Date de naissance"
          variant="outlined"
          fullWidth
          margin="normal"
          value={editedUser.birthDate}
          onChange={(e) => setEditedUser({ ...editedUser, birthDate: e.target.value })}
        />
        <TextField
          label="Solde actuel (CAD)"
          variant="outlined"
          fullWidth
          margin="normal"
          value={editedUser.balance}
          onChange={(e) => setEditedUser({ ...editedUser, balance: e.target.value })}
        />
        <TextField
          label="Nom d'utilisateur"
          variant="outlined"
          fullWidth
          margin="normal"
          value={editedUser.username}
          onChange={(e) => setEditedUser({ ...editedUser, username: e.target.value })}
        />
        <TextField
          type="password"
          label="Mot de passe"
          variant="outlined"
          fullWidth
          margin="normal"
          value={editedUser.password}
          onChange={(e) => setEditedUser({ ...editedUser, password: e.target.value })}
        />
        <Button variant="contained" fullWidth onClick={handleUpdateProfile}>
          Enregistrer les modifications
        </Button>
        <Button variant="contained" fullWidth onClick={handleLogout}>
          Se déconnecter
        </Button>
      </Paper>
    </div>
  );
};

export default ProfilePage;
