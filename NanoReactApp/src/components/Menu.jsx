import React from "react";

import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaHome,  FaArchive,FaAddressBook, FaHotel, FaPlane } from "react-icons/fa";
import {NavLink } from "react-router-dom";
import { Col, Container, Row, Image } from "react-bootstrap";

const Menu = (props) => (
    <Container>
    <NavBar bg="dark" variant="dark">
    <Image src="./images/LogoBestTravel.png" style={{height:60, width:60 ,marginRight:0  }} roundedCircle />
        
        <Nav>
        <Nav.Link to="/Vol" replace as={NavLink} style={{marginRight:"40px", marginLeft:"40px"  }}>
            <FaPlane/> Vol

        </Nav.Link>
        <Nav.Link to="/Hotel" replace as={NavLink} style={{marginRight:"40px"  }}>
            <FaHotel/> Hôtel

        </Nav.Link>
        <Nav.Link to="/Reservations" replace as={NavLink} style={{marginRight:"40px"  }}>
            <FaArchive/> Mes réservations

        </Nav.Link>
        
         
         <NavDropdown title={(<span><FaAddressBook/> Profil</span>)} style={{marginLeft:"400px"  }}>
              <NavDropdown.Item href="#action/3.1">Modifier</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
               Déconnecter
              </NavDropdown.Item>
              
            </NavDropdown>
        </Nav>
        <Nav>
        </Nav>

    </NavBar>
    {/*</Col>
     </Row> */}
    </Container>

    
    

);
export default Menu;