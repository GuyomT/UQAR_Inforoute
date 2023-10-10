import React from "react";

import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FaHome,  FaArchive,FaAddressBook, FaHotel, FaPlane } from "react-icons/fa";
import {NavLink } from "react-router-dom";

const Menu = (props) => (
    <NavBar bg="dark" variant="dark">
        <Nav>
        <Nav.Link to="/" replace as={NavLink}>
            <FaHome/> Home

        </Nav.Link>
        <Nav.Link to="/Inscription" replace as={NavLink}>
            <FaHome/> Inscription

        </Nav.Link>
        <Nav.Link to="/Vol" replace as={NavLink}>
            <FaPlane/> Vol

        </Nav.Link>
        <Nav.Link to="/Hotel" replace as={NavLink}>
            <FaHotel/> Hôtel

        </Nav.Link>
        <Nav.Link to="/Reservations" replace as={NavLink}>
            <FaArchive/> Mes réservations

        </Nav.Link>
        <Nav.Link to="/Profil" replace as={NavLink}>
            <FaAddressBook/> Profil

        </Nav.Link>
        </Nav>

    </NavBar>

);
export default Menu;