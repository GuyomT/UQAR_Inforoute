import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import axios from "axios";
import { Card } from "react-bootstrap";
import { TextField, Button, Grid } from "@mui/material";
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
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hotel = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (Object.keys(props.connectedUser).length == 0) {
      navigate("/");
      toast.error("Vous devez être connecté.", {
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
  });
  const [hotels, setHotels] = useState([]);
  const [searchParams, setSearchParams] = useState({
    destination: "Montreal",
    arrivalDate: "2023-11-01",
    departureDate: "2023-12-25",
    numberofpassanger: 1,
  });
  const [sortOrder, setSortOrder] = useState("asc");
  const token = import.meta.env.VITE_API_KEY;

  const handleSearch = () => {
    axios
      .get(
        // `/hotel/api/v2/lookup.json?query=${searchParams.destination}&lang=fr&lookFor=both&limit=100&token=${token}`
        `/hotel/api/v2/cache.json?location=${searchParams.destination}&checkIn=${searchParams.arrivalDate}&checkOut=${searchParams.departureDate}&adults=${searchParams.numberofpassanger}&children=0&infants=0&currency=cad&limit=50&token=${token}`
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
    <div className="app centered">
      <Card>
        <Card.Header as="h5">Réservez votre hébergement</Card.Header>

        <Card.Body>
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
                onChange={(e) => {
                  if (searchParams.departureDate < e.target.value) {
                    toast.error(
                      "Vérifier la date d'entrée et la date de sortie.",
                      {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      }
                    );
                    e.target.preventDefault();
                  } else {
                    setSearchParams({
                      ...searchParams,
                      arrivalDate: e.target.value,
                    });
                  }
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                label="Date de sortie"
                type="date"
                variant="outlined"
                value={searchParams.departureDate}
                onChange={(e) => {
                  if (searchParams.arrivalDate > e.target.value) {
                    toast.error(
                      "Vérifier la date d'entrée et la date de sortie.",
                      {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      }
                    );
                    e.target.preventDefault();
                  } else {
                    setSearchParams({
                      ...searchParams,
                      departureDate: e.target.value,
                    });
                  }
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                label="Nombre de personnes"
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
              <Button
                variant="contained"
                color="primary"
                onClick={handleSearch}
              >
                Rechercher
              </Button>
            </Grid>
          </Grid>
        </Card.Body>
      </Card>

      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Hotel</TableCell>
                <TableCell>Ville</TableCell>
                <TableCell>Pays</TableCell>
                <TableCell>Étoiles </TableCell>
                <TableCell
                  onClick={toggleSortOrder}
                  style={{ cursor: "pointer" }}
                >
                  Prix(CAD){sortOrder === "asc" ? "▲" : "▼"}
                </TableCell>

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
const mapStateToProps = (state) => {
  return { connectedUser: state.connectedUser };
};
export default connect(mapStateToProps)(Hotel);
