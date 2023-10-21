const hotelsReducer = (hotels = [], action) => {
    switch (action.type) {
        case "RESERVER_HOTEL" :
            return [...hotels,action.payload];
        case "REINITIALISER_Hotel" :
            return [];
        default:
            return hotels;
    }

};
export default hotelsReducer;
