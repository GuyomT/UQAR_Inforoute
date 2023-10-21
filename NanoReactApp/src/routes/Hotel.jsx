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
import ResultatRechercheHotel from "../components/ResultatRechercheHotel";

const Hotel = () => {
  const [hotels, setHotels] = useState([]);
  const [searchParams, setSearchParams] = useState({
    destination: "CDG",
    arrivalDate: "2023-10-22",
    departureDate: "2023-10-25",//TODO
    numberofpassanger: 1,
  });
  const [sortOrder, setSortOrder] = useState("asc");
  const token = import.meta.env.VITE_API_KEY;

  const handleSearch = () => {
    axios
      .get(
        // `/hotel/api/v2/lookup.json?query=${searchParams.destination}&lang=fr&lookFor=both&limit=100&token=${token}`
        `/hotel/api/v2/cache.json?location=${searchParams.destination}&checkIn=${searchParams.arrivalDate}&checkOut=${searchParams.departureDate}&adults=2&children=10&infants=0&currency=cad&limit=100&token=${token}`
      
        )
      .then((res) => {
        setHotels(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };



  return (
    <div className="app centered" >
      <Card  >
      
        
        <Card.Header as="h5">Réservez votre hébergement</Card.Header>
        
      <Card.Body >
        <Grid container spacing={2}>
        <Grid item xs={2}>
            <TextField
              label="Destination"
              variant="outlined"
              type="text"
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
              label="Date d'entrée"
              variant="outlined"
              type="date"
              value={searchParams.arrivalDate}
              onChange={(e) =>
                setSearchParams({
                  ...searchParams,
                  arrivalDate: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Date de sortie"
              type="date"
              variant="outlined"
              value={searchParams.departureDate}
              onChange={(e) =>
                setSearchParams({ ...searchParams, departDate: e.target.value })
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
                <TableCell>Hotel</TableCell>
                <TableCell>Ville</TableCell>
                <TableCell>Pays</TableCell>
                <TableCell 
                  onClick={toggleSortOrder}
                  style={{ cursor: "pointer" }}
                  >Prix{sortOrder === "asc" ? "▲" : "▼"}</TableCell>
                <TableCell>Étoiles </TableCell>
                
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hotels.map((hotel, key) => (
                <ResultatRechercheHotel
                  data={hotel}
                  key={key}
                  
                  nombreDePassager={searchParams.numberofpassanger}
                ></ResultatRechercheHotel>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      </div>
  );
};
export default Hotel;
