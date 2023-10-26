import {React, useState } from "react";
import { v4 } from "uuid";
import { TableCell, TableRow } from "@mui/material";
import { Button } from "react-bootstrap";
import Facture from "./FactureModal";

const LigneFacture = (props) => {
  console.log(props.data)
  function currencyFormat(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  const [showFacture, setShowFacture] = useState(false);

  const toggleFacture = () => {
    setShowFacture(!showFacture);
  };

  return (
    <TableRow>
      <TableCell>{props.data.DateDepayement}</TableCell>
      <TableCell>{currencyFormat(props.data.Total)}</TableCell>
      <TableCell>
        <Button variant="primary" onClick={toggleFacture}>
          Détail
        </Button>
        {showFacture && <Facture show={showFacture} handleClose={toggleFacture} data={props.data}/>}
      </TableCell>
    </TableRow>
  );
};
export default LigneFacture;
