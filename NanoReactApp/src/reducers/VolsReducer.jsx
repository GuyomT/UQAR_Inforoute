const volsReducer = (vols = [], action) => {
    switch (action.type) {
        case "CHERCHER_VOL" :
            return action.payload.data;
        default:
            return vols;
    }

};
export default volsReducer;