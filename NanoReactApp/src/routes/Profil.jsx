import React from "react";

import { Container, Button } from "react-bootstrap";
import { FaHome, FaTimesCircle } from "react-icons/fa";

import { Link } from "react-router-dom";

const Profil = (props) => (
  <Container>
    <h1>
      <FaTimesCircle /> <b>Profil</b>
    </h1>

    <p>Profil.</p>

    <Button variant="success" to="/" as={Link}>
      <FaHome /> Acceuil
    </Button>
  </Container>
);

export default Profil;
