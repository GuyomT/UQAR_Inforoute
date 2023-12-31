import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Form, Button, Image } from "react-bootstrap";
import { FaUserLock } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { login } from "../actions/UtilisateursActions";
import { connect } from "react-redux";
import {  useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Connexion = (props) => {
  let _login;
  let _password;

  const navigate = useNavigate();
  const login = () => {
    if (props.users.filter((user) => user.email == _login.value && user.password == _password.value).length == 1) {
      props.login(props.users.filter((user) => user.email == _login.value && user.password == _password.value)[0]);
      navigate("/Vol");
    }
    else {
      toast.error("échec de connexion", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  return (
    <Container style={{ marginTop: "150px" }}>
      <Image src="./images/LogoBestTravel.png" style={{ height: 200, width: 200, marginLeft: "40%", marginRight: "40%" }} roundedCircle />

      <Card style={{ marginLeft: "350px", marginRight: "350px", height: "300px" }}>
        <Card.Header as="h5">Ouvrir une session ou créez un compte</Card.Header>
        <Card.Body>
          <Row style={{ marginTop: "10px" }}>
            <Col>
              <span><FaUserLock /></span>
              <Form.Control
                type="email"
                placeholder="name@example.com" ref={(input) => (_login = input)}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col>
              <FaLock />
              <Form.Control type="password" placeholder="Entrer mot de passe" ref={(input) => (_password = input)} />
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col xs={2}></Col>
            <Col xs={3}>
              <Card.Link to="/Inscription" as={NavLink}>S'inscrire</Card.Link>
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

const mapStateToProps = (state) => {
  return { users: state.users };
};
export default connect(mapStateToProps, { login: login })(Connexion);
