import React, { useEffect } from 'react';
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Summary from './components/Summary';
import Users from './components/Users';
import Countries from './components/Countries';
import { fetchCountries } from './actions';

// Main component
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <HashRouter>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Galerie</Nav.Link>
            <Nav.Link as={Link} to="/users">Utilisateurs</Nav.Link>
            <Nav.Link as={Link} to="/countries">Pays</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path="/" element={<Summary />} />
        <Route path="/users" element={<Users />} />
        <Route path="/countries" element={<Countries />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
