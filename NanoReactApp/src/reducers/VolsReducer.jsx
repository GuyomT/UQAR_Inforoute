const volsReducer = (vols = [], action) => {
    switch (action.type) {
        case "RESERVER_VOL" :
            return [...vols,action.payload];
        case "REINITIALISER_VOL" :
            return [];
        default:
            return vols;
    }

};
export default volsReducer;