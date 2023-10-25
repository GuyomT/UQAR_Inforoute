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
import { supprimerReservationVol } from "../actions/VolActions";
import { Button } from "react-bootstrap";

const Facture = (props) => {
  
  return (
    <TableRow key={props.key}>
      <TableCell>
        {new Date(props.data.DateDeDepart).toLocaleString()}
      </TableCell>
      <TableCell>{new Date(props.data.DateDeRetour).toLocaleString()}</TableCell>
      <TableCell>{props.data.Origin}</TableCell>
      <TableCell>{props.data.Destination}</TableCell>
      <TableCell>{props.data.Airline}</TableCell>
      <TableCell>{props.data.Prix}</TableCell>
      </TableRow>
  );
};
export default Facture;

