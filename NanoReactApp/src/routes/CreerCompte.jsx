import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  CardHeader,
  CardBody,
} from "react-bootstrap";
import { FaUserLock } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";
import { connect } from "react-redux";
import { inscription } from "../actions/UtilisateursActions";
import {NavLink } from "react-router-dom";
import {useNavigate}  from "react-router-dom";

const CreerCompte = (props) => {
  let _FirstName;
  let _LastName;
  let _Password;
  let _Email;
  let _DateDeNaissance;
  let _PasswordConfirmation;
  const Inscription = () => {
    if (_Password.value == _PasswordConfirmation.value) {
      props.Inscription(
        _FirstName.value,
        _LastName.value,
        _Email.value,
        _Password.value,
        _DateDeNaissance.value
      );
      // useNavigate('/');
    }else{
      alert("Mot de passe n'est pas conforme ");
      //TODO
    }
  };
  return (
    <Container style={{ marginTop: "50px" }}>
      <Card
        style={{ marginLeft: "100px", marginRight: "100px", height: "550px" }}
      >
        <CardHeader as="h5">Créer votre compte</CardHeader>
        <CardBody>
          <Form style={{ padding: "40px" }}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
              <Form.Label column sm="2">
                Prénom
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Entrez votre prénom"
                  
                  ref={(input) => (_FirstName = input)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextFirstName"
            >
              <Form.Label column sm="2">
                Nom
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Entrez votre nom"
                  ref={(input) => (_LastName = input)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Naissance
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="date"
                  defaultValue="20/10/2000"
                  ref={(input) => (_DateDeNaissance = input)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="email"
                  defaultValue="email@example.com"
                  ref={(input) => (_Email = input)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  ref={(input) => (_Password = input)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Confirmation Password
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="password"
                  placeholder="Confirmation Password"
                  ref={(input) => (_PasswordConfirmation = input)}
                />
              </Col>
            </Form.Group>

            <Button variant="primary"  onClick={Inscription}>
              Créer
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { data: state.users };
};
export default connect(mapStateToProps, { Inscription: inscription })(
  CreerCompte
);
