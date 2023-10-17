import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const SearchHotel = () => {
  const [hotels, setHotels] = useState([]);

  const token = import.meta.env.VITE_API_KEY;
  const city = "Quebec";

  useEffect(() => {
    axios
      .get(
        `/hotel/api/v2/lookup.json?query=${city}&lang=fr&lookFor=both&limit=100&token=${token}`
      )
      .then((res) => {
        setHotels(res.data.results.hotels.filter(hotel => hotel.locationName.includes("Canada")));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return hotels.map((hotel, key) =>
  <div key = {key} >
    <p><b>{hotel.fullName}</b></p>
    <p>{hotel.locationName}</p>
    <hr />
  </div>);
};

export default SearchHotel;