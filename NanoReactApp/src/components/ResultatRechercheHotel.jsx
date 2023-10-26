import React from "react";
import { connect } from "react-redux";
import { TableCell, TableRow } from "@mui/material";
import { reserverHotel } from "../actions/HotelActions";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResultatRechercheHotel = (props) => {
  const Reserver = () => {
    if (
      props.connectedUser.solde >=
      props.data.priceAvg * props.nombreDePassager
    ) {
      props.ReserverHotel(props.data, props.nombreDePassager);
      toast.success("Réservation Hotel ajouté avec succès", {
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
      <TableCell>{props.data.hotelName}</TableCell>
      <TableCell>{props.data.location.name}</TableCell>
      <TableCell>{props.data.location.country}</TableCell>
      <TableCell>{props.data.stars}</TableCell>
      <TableCell>{props.data.priceAvg}</TableCell>
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
export default connect(mapStateToProps, { ReserverHotel: reserverHotel })(
  ResultatRechercheHotel
);
