const baseUrl = "https://api.travelpayouts.com";
const token = "45fddd3307f3710f1477e4871cedd748";


export const reserverVol = (vol, nombreDePassager) => {
  return {
    type: "RESERVER_VOL",
    payload: {
      Origin: vol.origin,
      Destination: vol.destination,
      Airline: vol.airline,
      DateDeDepart: vol.departure_at,
      DateDeRetour: vol.return_at,
      NumeroDeVol: vol.flight_number,
      Prix: vol.price,
      NombreDePassager: nombreDePassager,
    },
  };
};

export const supprimerReservationVol = (vol) => {
  return {
    type: "SUPPRIMER_RESERVATION_VOL",
    payload: vol,
  };
};
