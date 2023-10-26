const factureReducer = (factures = [], action) => {
    switch (action.type) {
        case "PAYEMENT" :
            return [...factures,action.payload];
        default:
            return factures;
    }

};
export default factureReducer;