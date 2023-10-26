import React from "react";
import { connect } from "react-redux";
import {
  TableCell,
  TableRow
} from "@mui/material";
import { reserverVol } from "../actions/VolActions";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResultatRechercheVol = (props) => {
  const Reserver = () => {
    if (
      props.connectedUser.solde >=
      props.data.price * props.nombreDePassager
    ) {
      props.ReserverVol(props.data, props.nombreDePassager);
      toast.success("Réservation Vol ajouté avec succès", {
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
    <TableRow key={props.key}>
      <TableCell>
        {new Date(props.data.departure_at).toLocaleString()}
      </TableCell>
      <TableCell>{new Date(props.data.return_at).toLocaleString()}</TableCell>
      <TableCell>{props.data.origin}</TableCell>
      <TableCell>{props.data.destination}</TableCell>
      <TableCell>{props.data.airline}</TableCell>
      <TableCell>{props.data.price}</TableCell>
      <TableCell>
        <Button variant="primary" onClick={Reserver}>
          Réserver
        </Button>
      </TableCell>
    </TableRow>
  );
};
const mapStateToProps = (state) => {
  return { connectedUser: state.connectedUser };
};
export default connect(mapStateToProps, { ReserverVol: reserverVol })(
  ResultatRechercheVol
);
