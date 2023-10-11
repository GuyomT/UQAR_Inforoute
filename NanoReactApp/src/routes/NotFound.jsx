import React from "react";

import { Container, Button } from "react-bootstrap";
import { FaHome, FaTimesCircle } from "react-icons/fa";

import { Link } from "react-router-dom";

const NotFound = (props) => (
  <Container>
    <h1>
      <FaTimesCircle /> <b>404 not Found!</b>
    </h1>

    <p>The requested route doesn't exist.</p>

    <Button variant="success" to="/" as={Link}>
      <FaHome /> Acceuil
    </Button>
  </Container>
);

export default NotFound;
