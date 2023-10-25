import React from "react";

import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaArchive, FaAddressBook, FaHotel, FaPlane } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Container, Image } from "react-bootstrap";

const Menu = (props) => (
  <Container>
    <NavBar bg="dark" variant="dark">
      <Nav>
        <Nav.Link to="/" replace as={NavLink}>
          <Image
            src="./images/LogoBestTravel.png"
            style={{ height: 60, width: 60, marginRight: 0 }}
            roundedCircle
            to="/"
            as={NavLink}
          />
        </Nav.Link>
      </Nav>

      <Nav>
        <Nav.Link
          to="/Vol"
          replace
          as={NavLink}
          style={{ marginRight: "40px", marginLeft: "40px" }}
        >
          <FaPlane /> Vol
        </Nav.Link>
        <Nav.Link
          to="/Hotel"
          replace
          as={NavLink}
          style={{ marginRight: "40px" }}
        >
          <FaHotel /> Hôtel
        </Nav.Link>
        <Nav.Link
          to="/Facture"
          replace
          as={NavLink}
          style={{ marginRight: "40px" }}
        >
          <FaArchive /> Réservation et Facturation
        </Nav.Link>

        <NavDropdown
          title={
            <span>
              <FaAddressBook /> Profil
            </span>
          }
          style={{ marginLeft: "400px" }}
        >
          <NavDropdown.Item href="#/Profil">Modifier</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#/">Déconnexion</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav></Nav>
    </NavBar>
    {/*</Col>
     </Row> */}
  </Container>
);
export default Menu;
