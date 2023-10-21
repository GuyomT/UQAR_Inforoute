import React from "react";

import { Container, Button } from "react-bootstrap";
import { FaHome, FaTimesCircle } from "react-icons/fa";

import { Link } from "react-router-dom";

const Facture = (props) => (
  <Container>
    <h1>
      <FaTimesCircle /> <b>Facture</b>
    </h1>

    <p>liste des reservations.</p>

    <Button variant="success" to="/" as={Link}>
      <FaHome /> Acceuil
    </Button>
  </Container>
);

export default Facture;
