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

const LigneFacture = (props) => {
  const Supprimer = () => {
    props.SupprimerReservationVol(
      props.data);
};
  return (
    <TableRow key={props.key}>
      <TableCell>
        {props.data.DateDepayement}
      </TableCell>
       <TableCell>{props.data.Total}</TableCell>
    </TableRow>
  );
};
export default connect(null, { SupprimerReservationVol: supprimerReservationVol })(LigneFacture);

