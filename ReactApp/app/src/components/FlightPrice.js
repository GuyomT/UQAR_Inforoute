import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FlightPrices() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const origin = 'YUL';
  const destination = 'CDG';
  const departDate = '2023-11';
  const returnDate = '2023-12';
  const currency = 'EUR';
  const token = "45fddd3307f3710f1477e4871cedd748"
  console.log("TOKEN "+ token);

  useEffect(() => {
    axios
      .get('/api/getFlights', {
        params: {
          origin,
          destination,
          depart_date: departDate,
          return_date: returnDate,
          page: 1,
          currency,
          token,
        },
      })
      .then((response) => {
        setData(response.data.data);
        console.log(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('API error:', error);
        console.log('Response data:', error.response.data);
        console.log('Response status:', error.response.status);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Prices for Flights from {origin} to {destination}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((flight, index) => (
            <li key={index}>
              <p>Price: {flight.value} {currency}</p>
              <p>Departure Date: {flight.depart_date}</p>
              <p>Return Date: {flight.return_date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FlightPrices;