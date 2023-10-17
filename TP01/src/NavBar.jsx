import React, { useState } from "react";
import { AppBar, Toolbar, Button, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ loggedInUser, setLoggedInUser }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    navigate("/login");
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flex: 1 }}>
          TP01
        </Typography>
        {loggedInUser ? (
          <>
            <Button color="inherit" component={Link} to="/profile">
              Profil
            </Button>
            <Button color="inherit" onClick={handleLogout}>
              Se déconnecter
            </Button>
          </>
        ) : (
          <Button color="inherit" component={Link} to="/login">
            Se connecter
          </Button>
        )}

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem component={Link} to="/search-flight" onClick={handleMenuClose}>
            Rechercher des vols
          </MenuItem>
          <MenuItem component={Link} to="/search-hotel" onClick={handleMenuClose}>
            Rechercher des hôtels
          </MenuItem>
          {/* Ajoutez d'autres éléments de menu ici */}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
