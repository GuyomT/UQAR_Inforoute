import React from "react";
import { connect } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Button } from "react-bootstrap";

import {supprimerReservationHotel} from "../actions/HotelActions";
const LigneFactureHotel = (props) => {
  const Supprimer = () => {
    props.SupprimerReservationHotel(
      props.data);
};
  return (
    <TableRow key={props.key}>
      <TableCell>{props.data.NomHotel}</TableCell>
      <TableCell>{props.data.Ville}</TableCell>
      <TableCell>{props.data.Pays}</TableCell>
      <TableCell>{props.data.NombreEtoiles}</TableCell>
      <TableCell>{props.data.Prix}</TableCell>
      <TableCell><Button variant="danger"  onClick={Supprimer}>X</Button></TableCell>
        
    </TableRow>
  );
};
export default connect(null, { SupprimerReservationHotel: supprimerReservationHotel })(LigneFactureHotel);
