const hotelsReducer = (hotels = [], action) => {
    switch (action.type) {
        case "RESERVER_HOTEL" :
            return [...hotels,action.payload];
        case "SUPPRIMER_RESERVATION_HOTEL" :
            return hotels.filter((hotel) => hotel.HotelId != action.payload.HotelId)
        case "REINITIALISER_HOTEL" :
            return [];
        default:
            return hotels;
    }

};
export default hotelsReducer;
