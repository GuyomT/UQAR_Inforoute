import { React, useEffect, useState } from "react";
import { connect } from "react-redux";
import { payement } from "../actions/FactureActions";
import LigneFactureVol from "../components/LigneFactureVol";
import LigneFacture from "../components/LigneFacture";
import { Card } from "react-bootstrap";
import { Button } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LigneFactureHotel from "../components/LigneFactureHotel";

const Facture = (props) => {
  function currencyFormat(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  const [totalFacture, updateTotalFacture] = useState({
    totalReservationVol:
      props.vols.length == 0
        ? 0
        : props.vols.reduce((a, v) => (a = a + v.Prix * v.NombreDePassager), 0),
    totalReservationHotel:
      props.hotels.length == 0
        ? 0
        : props.hotels.reduce(
            (a, v) => (a = a + v.Prix * v.NombreDePassager),
            0
          ),
  });
  const calculTotalFacture = () => {
    let total =
      props.vols.length == 0
        ? 0
        : props.vols.reduce((a, v) => (a = a + v.Prix * v.NombreDePassager), 0);
    total +=
      props.hotels.length == 0
        ? 0
        : props.hotels.reduce(
            (a, v) => (a = a + v.Prix * v.NombreDePassager),
            0
          );
    return total;
  };
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

  const payement = () => {
    updateTotalFacture();
    if (props.connectedUser.solde >= calculTotalFacture()) {
      props.Payement(props.vols, props.hotels, calculTotalFacture());
      toast.success("Payement terminé avec succès.", {
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
      toast.error("Solde insuffisant!!!", {
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
    <div className="app centered">
      <Card>
        <Card.Header as="h5">Réservations Vols</Card.Header>
      </Card>
      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date de départ</TableCell>
                <TableCell>Date de retour</TableCell>
                <TableCell>Origine</TableCell>
                <TableCell>Destination</TableCell>
                <TableCell>Compagnie </TableCell>
                <TableCell>Nombre des passagers </TableCell>
                <TableCell>Tarif par personne (CAD)</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.vols.map((vol) => (
                <LigneFactureVol
                  data={vol}
                  key={vol.NumeroDeVol + vol.DateDeDepart}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <Card>
        <Card.Header as="h5">Réservations Hotels</Card.Header>
      </Card>
      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Hotel</TableCell>
                <TableCell>Ville</TableCell>
                <TableCell>Pays</TableCell>
                <TableCell>Étoiles </TableCell>
                <TableCell>Nombre des passagers </TableCell>
                <TableCell>Tarif par personne(CAD)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.hotels.map((hotel) => (
                <LigneFactureHotel data={hotel} key={hotel.HotelId} />
              ))}
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>
                  Montant Total à payer: {currencyFormat(calculTotalFacture())}{" "}
                  (CAD)
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={payement}
                  >
                    Payer
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <Card>
        <Card.Header as="h5">Factures</Card.Header>
      </Card>
      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date de payement</TableCell>
                <TableCell>Total (CAD)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.factures.map((facture) => (
                <LigneFacture data={facture} key={facture.Id} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    factures: state.factures,
    vols: state.vols,
    hotels: state.hotels,
    connectedUser: state.connectedUser,
  };
};
export default connect(mapStateToProps, { Payement: payement })(Facture);
