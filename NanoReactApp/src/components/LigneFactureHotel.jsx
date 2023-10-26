import React from "react";
import { connect } from "react-redux";
import { TableCell, TableRow } from "@mui/material";
import { Button } from "react-bootstrap";

import { supprimerReservationHotel } from "../actions/HotelActions";
const LigneFactureHotel = (props) => {
  function currencyFormat(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  const Supprimer = () => {
    props.SupprimerReservationHotel(props.data);
  };
  return (
    <TableRow key={props.key}>
      <TableCell>{props.data.NomHotel}</TableCell>
      <TableCell>{props.data.Ville}</TableCell>
      <TableCell>{props.data.Pays}</TableCell>
      <TableCell>{props.data.NombreEtoiles}</TableCell>
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
  SupprimerReservationHotel: supprimerReservationHotel,
})(LigneFactureHotel);
