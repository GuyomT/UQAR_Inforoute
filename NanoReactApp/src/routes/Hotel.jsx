import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Form, Button, CardHeader, CardBody, FloatingLabel } from "react-bootstrap";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const Hotel= (props ) => {

    return (
        <Container style={{marginTop:"50px"}}>
          <Row>
            <Card style={{marginLeft:"10px",marginRight:"10px",height:"300px", width:"1130px"}}>
        <Card.Header as="h5">Réservez votre hébergement</Card.Header>
              <Row style={{marginTop:"30px", marginLeft:"30px", marginRight:"10px"}} className="g-2">
      <Col  md={{ span: 3}}>
 
            <FaMapMarkerAlt/> 
      <Form.Label>Destination</Form.Label>
          <Form.Control type="text" placeholder="Destination" />
        
      </Col>
      <Col md={{ span: 3}}>
      <FaRegCalendarAlt/> 
        
      <Form.Label>Date début</Form.Label>
          <Form.Control type="date" placeholder="Dates" />
        
      </Col>
      <Col md={{ span: 3}}>
      <FaRegCalendarAlt/> 
          <Form.Label>Date fin</Form.Label>
          <Form.Control type="date" placeholder="Dates" />
        
      </Col>
      <Col md={{ span: 2}}>
        <FaUser />
        <Form.Label>Personnes</Form.Label>
              <Form.Control type="number" placeholder="Adulte" />
            
              <Form.Control type="number" placeholder="Enfant" />
            
        
          {/* <Form.Select aria-label="Floating label select example">
            <option>Personnes</option>
            <option value="1">Adulte</option>
            <option value="2">Enfant</option>
            
          </Form.Select> */}
        
      </Col>
      <Col md={{ span: 1,offset:9}} style={{marginTop:"30px"}} > 
     <Button  variant="primary" >Rechercher</Button>
      </Col>
      
    </Row>
    </Card> 
    </Row>
    <Row>
    <Card style={{marginTop:"10px", marginLeft:"5px",marginRight:"5px",height:"300px", width:"1130px"}}>
      <Card.Body>Listes de recherche</Card.Body>
    </Card>
     </Row>
        </Container>
      );
};
export default Hotel ;