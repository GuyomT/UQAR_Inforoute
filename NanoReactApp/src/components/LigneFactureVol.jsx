import React from "react";
import { connect } from "react-redux";
import { TableCell, TableRow } from "@mui/material";
import { supprimerReservationVol } from "../actions/VolActions";
import { Button } from "react-bootstrap";

const LigneFactureVol = (props) => {
  function currencyFormat(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  const Supprimer = () => {
    props.SupprimerReservationVol(props.data);
  };
  return (
    <TableRow key={props.key}>
      <TableCell>
        {new Date(props.data.DateDeDepart).toLocaleString()}
      </TableCell>
      <TableCell>
        {new Date(props.data.DateDeRetour).toLocaleString()}
      </TableCell>
      <TableCell>{props.data.Origin}</TableCell>
      <TableCell>{props.data.Destination}</TableCell>
      <TableCell>{props.data.Airline}</TableCell>
      <TableCell>{props.data.NombreDePassager}</TableCell>
      <TableCell>{currencyFormat(props.data.Prix)} (CAD)</TableCell>
      <TableCell>
        <Button variant="danger" onClick={Supprimer}>
          X
        </Button>
      </TableCell>
    </TableRow>
  );
};
export default connect(null, {
  SupprimerReservationVol: supprimerReservationVol,
})(LigneFactureVol);
