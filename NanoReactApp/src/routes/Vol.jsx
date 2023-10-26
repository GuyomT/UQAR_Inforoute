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
  TableSortLabel,
} from "@mui/material";
import ResultatRechercheVol from "../components/ResultatRechercheVol";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Vol = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (Object.keys(props.connectedUser).length === 0) {
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
  }, [navigate, props.connectedUser]);

  const [flights, setFlights] = useState([]);
  const [dates, setDates] = useState([]);
  const [searchParams, setSearchParams] = useState({
    origin: "YUL",
    destination: "CDG",
    departDate: "2023-11-01",
    returnDate: "2023-12-25",
    numberofpassanger: 1,
  });
  const [sortConfig, setSortConfig] = useState({ key: 'price', direction: 'asc' });
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

  const handleSort = () => {
    const isAsc = sortConfig.direction === 'asc';
    setSortConfig({ key: 'price', direction: isAsc ? 'desc' : 'asc' });
  };

  const sortedDates = dates.slice().sort((a, b) => {
    const priceA = flights[a].price * searchParams.numberofpassanger;
    const priceB = flights[b].price * searchParams.numberofpassanger;
    return (sortConfig.direction === 'asc' ? priceA - priceB : priceB - priceA);
  });

  return (
    <div className="app centered">
      <Card>
        <Card.Header as="h5">Réservez votre vol</Card.Header>
        <Card.Body>
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
                onChange={(e) => {
                  if (searchParams.returnDate < e.target.value) {
                    toast.error("Vérifier les dates de départ et de retour", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });
                    e.target.preventDefault();
                  } else {
                    setSearchParams({
                      ...searchParams,
                      departDate: e.target.value,
                    });
                  }
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                label="Date de retour"
                type="date"
                variant="outlined"
                value={searchParams.returnDate}
                onChange={(e) => {
                  if (searchParams.departDate > e.target.value) {
                    toast.error("Vérifier les dates de départ et de retour", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });
                    e.target.preventDefault();
                  } else {
                    setSearchParams({
                      ...searchParams,
                      returnDate: e.target.value,
                    });
                  }
                }}
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
                <TableCell>Date de départ</TableCell>
                <TableCell>Date de retour</TableCell>
                <TableCell>Origine</TableCell>
                <TableCell>Destination</TableCell>
                <TableCell>Compagnie</TableCell>
                <TableCell>
                  <TableSortLabel
                    active={sortConfig.key === 'price'}
                    direction={sortConfig.direction}
                    onClick={handleSort}
                  >
                    Prix (CAD)
                  </TableSortLabel>
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

const mapStateToProps = (state) => {
  return { connectedUser: state.connectedUser };
};

export default connect(mapStateToProps)(Vol);
