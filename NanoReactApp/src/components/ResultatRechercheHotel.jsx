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
import {reserverHotel} from "../actions/HotelActions";
import { Button } from "react-bootstrap";

const ResultatRechercheHotel = (props) => {
  const Reserver = () => {
      props.ReserverHotel(
        props.data,props.nombreDePassager);
  };
    return(
        <TableRow key={props.key}>
        <TableCell>{props.data.hotelName}</TableCell>
        <TableCell>{props.data.location.name}</TableCell>
        <TableCell>{props.data.location.country}</TableCell>
        <TableCell>{props.data.priceAvg}</TableCell>
        <TableCell>{props.data.stars}</TableCell>
        <TableCell><Button variant="primary"  onClick={Reserver}>Réserver</Button></TableCell>
        {/* Add more table cells for additional flight details */}
      </TableRow>
      );
};
export default connect(null, { ReserverHotel: reserverHotel })(ResultatRechercheHotel);