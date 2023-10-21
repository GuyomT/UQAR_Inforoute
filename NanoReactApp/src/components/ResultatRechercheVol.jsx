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
import {reserverVol} from "../actions/VolActions";
import { Button } from "react-bootstrap";

const ResultatRechercheVol = (props) => {
  const Reserver = () => {
      props.ReserverVol(
        props.data,props.nombreDePassager);
  };
    return(
        <TableRow key={props.key}>
        <TableCell>{new Date(props.data.departure_at).toLocaleString()}</TableCell>
        <TableCell>{new Date(props.data.return_at).toLocaleString()}</TableCell>
        <TableCell>{props.data.origin}</TableCell>
        <TableCell>{props.data.destination}</TableCell>
        <TableCell>{props.data.airline}</TableCell>
        <TableCell>{props.data.price}</TableCell>
        <TableCell><Button variant="primary"  onClick={Reserver}>Réserver</Button></TableCell>
        {/* Add more table cells for additional flight details */}
      </TableRow>
      );
};
export default connect(null, { ReserverVol: reserverVol })(ResultatRechercheVol);