import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaUserLock } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


const Connexion = (props) => {
    let _login;
    let _password;
    const login = () => {
        props.login(_login.value,_password.value)
    }
  return (
    <Container style={{marginTop:"150px"}}>
      <Card style={{marginLeft:"350px",marginRight:"350px",height:"300px"}}>
        <Card.Header as="h5">Ouvrir une session ou créez un compte</Card.Header>
        <Card.Body>
          <Row style={{marginTop: "10px"}}>
            <Col>
            <span><FaUserLock/></span>
              <Form.Control
                type="email"
                placeholder="name@example.com" ref={(input) => (_login = input)}
              />
            </Col>
          </Row>
          <Row style={{marginTop: "10px"}}>
            <Col>
            <FaLock/>
              <Form.Control type="password" placeholder="Entrer mot de passe" ref={(input) => (_password = input)}/>
            </Col>
          </Row>
          <Row style={{marginTop: "20px"}}>
          <Col xs={2}></Col>
            <Col xs={3}>
            {/* <Button variant="primary">S'inscrire</Button> */}
            <Card.Link href="#">S'inscrire</Card.Link>
            </Col>
            <Col xs={1}></Col> 
            <Col xs={6}>
            <Button onClick={login} variant="primary">Se connecter</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default Connexion;
