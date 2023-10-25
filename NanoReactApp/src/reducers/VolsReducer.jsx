const volsReducer = (vols = [], action) => {
    switch (action.type) {
        case "RESERVER_VOL" :
            return [...vols,action.payload];
        case "SUPPRIMER_RESERVATION_VOL" :
            return vols.filter((vol) => (vol.NumeroDeVol != action.payload.NumeroDeVol || vol.DateDeDepart != action.payload.DateDeDepart))
        case "REINITIALISER_VOL" :
            return [];
        default:
            return vols;
    }

};
export default volsReducer;