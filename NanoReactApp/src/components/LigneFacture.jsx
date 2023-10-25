import React from "react";
import { v4 } from "uuid";
import { TableCell, TableRow } from "@mui/material";
import { Button } from "react-bootstrap";
import Facture from "./Facture";

const LigneFacture = (props) => {
  function currencyFormat(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  const DetailFacture = () => {
    return <Facture Key={v4()}></Facture>;
  };
  return (
    <TableRow key={props.key}>
      <TableCell>{props.data.DateDepayement}</TableCell>
      <TableCell>{currencyFormat(props.data.Total)}</TableCell>
      {/* <TableCell><Button variant="primary"  onClick={DetailFacture}>Détail</Button></TableCell> */}
    </TableRow>
  );
};
export default LigneFacture;
