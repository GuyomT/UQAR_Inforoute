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
        props.data);
  };
    return(
        <TableRow key={props.key}>
        <TableCell>{props.date}</TableCell>
        <TableCell>{props.data.origin}</TableCell>
        <TableCell>{props.data.destination}</TableCell>
        <TableCell>{props.data.price}</TableCell>
        <TableCell><Button variant="primary"  onClick={Reserver}>Réserver</Button></TableCell>
        {/* Add more table cells for additional flight details */}
      </TableRow>
      );
};
export default connect(null, { ReserverVol: reserverVol })(ResultatRechercheVol);