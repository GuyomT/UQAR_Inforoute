import React, { useState } from "react";
import { AppBar, Toolbar, Button, Typography, IconButton, Drawer, List, ListItem, ListItemText, CssBaseline, Container, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ userManager }) => {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleMenuClick = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleLogout = () => {
    userManager.logout();
    navigate("/login");
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flex: 1 }}>
            BestFlights
          </Typography>
          {userManager.currentUser ? (
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
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
        <List>
          <ListItem component={Link} to="/search-flight" onClick={handleDrawerClose}>
            <ListItemText primary="Rechercher des vols" />
          </ListItem>
          <ListItem component={Link} to="/search-hotel" onClick={handleDrawerClose}>
            <ListItemText primary="Rechercher des hôtels" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default NavBar;
