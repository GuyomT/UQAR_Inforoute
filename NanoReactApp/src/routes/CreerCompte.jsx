import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { inscription } from "../actions/UtilisateursActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator";

const CreerCompte = (props) => {
  let _FirstName;
  let _LastName;
  let _Password;
  let _Email;
  let _DateDeNaissance;
  let _PasswordConfirmation;
  const [emailError, setEmailError] = useState("");
  let emailValid = true;
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("");
      emailValid = true;
    } else {
      setEmailError("émail non valide");
      emailValid = false;
    }
  };
  const navigate = useNavigate();
  const Inscription = () => {
    let formValid = true;
    if (_Password.value != _PasswordConfirmation.value) {
      formValid = false;
      toast.error("Mot de passe n'est pas conforme", {
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
    if (
      _FirstName.value.trim() === "" ||
      _LastName.value.trim() === "" ||
      _Email.value.trim() === "" ||
      _Password.value.trim() === "" ||
      _DateDeNaissance.value.trim() === ""
    ) {
      toast.error("Tous les champs sont obligatoires.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      formValid = false;
    }

    if (formValid) {
      props.Inscription(
        _FirstName.value,
        _LastName.value,
        _Email.value,
        _Password.value,
        _DateDeNaissance.value
      );
      toast.success("Compte ajouté avec succès", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/");
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
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextFirstName"
            >
              <Form.Label column sm="3">
                Prénom
              </Form.Label>
              <Col sm="9">
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
              controlId="formPlaintextLastName"
            >
              <Form.Label column sm="3">
                Nom
              </Form.Label>
              <Col sm="9">
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
              controlId="formPlaintextDateNaissance"
            >
              <Form.Label column sm="3">
                Naissance
              </Form.Label>
              <Col sm="9">
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
              <Form.Label column sm="3">
                Email
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="email"
                  defaultValue="email@example.com"
                  ref={(input) => (_Email = input)}
                  onChange={(e) => validateEmail(e)}
                />
              </Col>
              <span style={{ fontWeight: "bold", color: "red" }}>
                {emailError}
              </span>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="3">
                Password
              </Form.Label>
              <Col sm="9">
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
              controlId="formPlaintextConfirmPassword"
            >
              <Form.Label column sm="3">
                Confirmation Password
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="password"
                  placeholder="Confirmation Password"
                  ref={(input) => (_PasswordConfirmation = input)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm="9">
                <Button variant="primary" onClick={Inscription}>
                  Créer
                </Button>{" "}
              </Col>
            </Form.Group>
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
