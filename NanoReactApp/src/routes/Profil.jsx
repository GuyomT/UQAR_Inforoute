import React, { useEffect, useState } from "react";
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
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { modifierProfil } from "../actions/UtilisateursActions";

const Profil = (props) => {
  const [informationValues, setInformationValues] = useState({
    firstname: props.connectedUser.firstname,
    lastname: props.connectedUser.lastname,
    email: props.connectedUser.email,
    password: props.connectedUser.password,
    passwordConfirmation: props.connectedUser.password,
    dateDeNaissance: props.connectedUser.dateDeNaissance,
    solde: props.connectedUser.solde,
    id: props.connectedUser.id,
  });

  const navigate = useNavigate();
  useEffect(() => {
    if (Object.keys(props.connectedUser).length == 0) {
      navigate("/");
      toast.error("Vous devez être connecté.", {
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
  });
  const ModifierProfil = () => {
    if (informationValues.password == informationValues.passwordConfirmation) {
      props.ModifierProfil(informationValues);

      toast.success("Profil mis à jours avec succès", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
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
  };
  return (
    <Container style={{ marginTop: "50px" }}>
      <Card
        style={{ marginLeft: "100px", marginRight: "100px", height: "550px" }}
      >
        <CardHeader as="h5">Mettre à jours vos informations</CardHeader>
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
                  onChange={(e) =>
                    setInformationValues({
                      ...informationValues,
                      firstname: e.target.value,
                    })
                  }
                  defaultValue={informationValues.firstname}
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
                  onChange={(e) =>
                    setInformationValues({
                      ...informationValues,
                      lastname: e.target.value,
                    })
                  }
                  defaultValue={informationValues.lastname}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextDateDeNaissaince"
            >
              <Form.Label column sm="2">
                Naissance
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="date"
                  placeholder="20/10/2000"
                  onChange={(e) =>
                    setInformationValues({
                      ...informationValues,
                      dateDeNaissance: e.target.value,
                    })
                  }
                  defaultValue={informationValues.dateDeNaissance}
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
                  placeholder="email@example.com"
                  onChange={(e) =>
                    setInformationValues({
                      ...informationValues,
                      email: e.target.value,
                    })
                  }
                  defaultValue={informationValues.email}
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
                  onChange={(e) =>
                    setInformationValues({
                      ...informationValues,
                      password: e.target.value,
                    })
                  }
                  defaultValue={informationValues.password}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextConfirmationPassword"
            >
              <Form.Label column sm="2">
                Confirmation Password
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="password"
                  placeholder="Confirmation Password"
                  onChange={(e) =>
                    setInformationValues({
                      ...informationValues,
                      passwordConfirmation: e.target.value,
                    })
                  }
                  defaultValue={informationValues.passwordConfirmation}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formSolde">
              <Form.Label column sm="2">
                Solde (CAD)
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  onChange={(e) =>
                    setInformationValues({
                      ...informationValues,
                      solde: e.target.value,
                    })
                  }
                  defaultValue={informationValues.solde}
                />
              </Col>
            </Form.Group>

            <Button variant="primary" onClick={ModifierProfil}>
              Modifier
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { connectedUser: state.connectedUser };
};
export default connect(mapStateToProps, { ModifierProfil: modifierProfil })(
  Profil
);
