import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button, Grid, Card, CardContent, Typography } from "@mui/material";

const SearchFlight = () => {
  const [flights, setFlights] = useState([]);
  const [dates, setDates] = useState([]);
  const [searchParams, setSearchParams] = useState({
    origin: "MOW",
    destination: "KZN",
    departDate: "2023-11",
    returnDate: "2023-12",
    currency: "CAD",
  });

  const token = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    axios
      .get(
        `/api/v1/prices/calendar?origin=${searchParams.origin}&destination=${searchParams.destination}&depart_date=${searchParams.departDate}&return_date=${searchParams.returnDate}&token=${token}&currency=${searchParams.currency}`
      )
      .then((res) => {
        setDates(Object.keys(res.data.data));
        setFlights(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchParams]);

  return (
    <div className="app">
      <h1>Recherche de vols</h1>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <TextField
            label="Origine"
            variant="outlined"
            value={searchParams.origin}
            onChange={(e) => setSearchParams({ ...searchParams, origin: e.target.value })}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Destination"
            variant="outlined"
            value={searchParams.destination}
            onChange={(e) => setSearchParams({ ...searchParams, destination: e.target.value })}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Date de départ"
            variant="outlined"
            value={searchParams.departDate}
            onChange={(e) => setSearchParams({ ...searchParams, departDate: e.target.value })}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Date de retour"
            variant="outlined"
            value={searchParams.returnDate}
            onChange={(e) => setSearchParams({ ...searchParams, returnDate: e.target.value })}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Monnaie"
            variant="outlined"
            value={searchParams.currency}
            onChange={(e) => setSearchParams({ ...searchParams, currency: e.target.value })}
          />
        </Grid>
      </Grid>

      <Button variant="contained" color="primary" onClick={() => {}}>
        Rechercher
      </Button>

      <div className="flight-list">
        {dates.map((date, key) => (
          <Card key={key} className="flight-card">
            <CardContent>
              <Typography variant="h5">{date}</Typography>
              <Typography>
                <span>{flights[date].origin}</span> to <span>{flights[date].destination}</span>
              </Typography>
              <Typography>{flights[date].price} CAD</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SearchFlight;
