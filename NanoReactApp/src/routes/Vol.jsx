import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { connect } from "react-redux";

import axios from "axios";
import { Row, Col,Card, CardHeader,CardBody  } from "react-bootstrap";
import {
  TextField,
  Button,
  Grid,
  CardContent,
  Typography,
} from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ResultatRechercheVol from "../components/ResultatRechercheVol";

const Vol = () => {
  const [flights, setFlights] = useState([]);
  const [dates, setDates] = useState([]);
  const [searchParams, setSearchParams] = useState({
    origin: "YUL",
    destination: "CDG",
    departDate: "2023-10-22",
    returnDate: "2023-10-25",//TODO
    numberofpassanger: 1,
  });
  const [sortOrder, setSortOrder] = useState("asc");
  const token = import.meta.env.VITE_API_KEY;

  const handleSearch = () => {
    axios
      .get(
        `/flight/v1/prices/calendar?origin=${searchParams.origin}&destination=${searchParams.destination}&depart_date=${searchParams.departDate}&return_date=${searchParams.returnDate}&token=${token}&currency=CAD`
      )
      .then((res) => {
        setDates(Object.keys(res.data.data));
        setFlights(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortedDates = dates.slice().sort((a, b) => {
    const priceA = flights[a].price;
    const priceB = flights[b].price;
    return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
  });

  return (
    <div className="app centered" >
      <Card  >
      
        
        <Card.Header as="h5">Réservez votre vol</Card.Header>
        
      <Card.Body >
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <TextField
              label="Origine"
              variant="outlined"
              value={searchParams.origin}
              onChange={(e) =>
                setSearchParams({ ...searchParams, origin: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Destination"
              variant="outlined"
              value={searchParams.destination}
              onChange={(e) =>
                setSearchParams({
                  ...searchParams,
                  destination: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Date de départ"
              type="date"
              variant="outlined"
              value={searchParams.departDate}
              onChange={(e) =>
                setSearchParams({ ...searchParams, departDate: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Date de retour"
              type="date"
              variant="outlined"
              value={searchParams.returnDate}
              onChange={(e) =>
                setSearchParams({ ...searchParams, returnDate: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Nombre de passagers"
              variant="outlined"
              type="number"
              value={searchParams.numberofpassanger}
              onChange={(e) =>
                setSearchParams({
                  ...searchParams,
                  numberofpassanger: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" color="primary" onClick={handleSearch}>
              Rechercher
            </Button>
          </Grid>
        </Grid>
        </Card.Body>
      </Card>
      
      <div >
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date de départ</TableCell>
                <TableCell>Date de retour</TableCell>
                <TableCell>Origine</TableCell>
                <TableCell>Destination</TableCell>
                <TableCell>Compagnie </TableCell>
                <TableCell
                  onClick={toggleSortOrder}
                  style={{ cursor: "pointer" }}
                >
                  Prix (CAD)
                  {sortOrder === "asc" ? "▲" : "▼"}
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedDates.map((date, key) => (
                <ResultatRechercheVol
                  data={flights[date]}
                  key={key}
                  date={date}
                  nombreDePassager={searchParams.numberofpassanger}
                ></ResultatRechercheVol>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      </div>
  );
};
export default Vol;
