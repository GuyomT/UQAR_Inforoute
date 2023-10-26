


const connectedUserReducer = (connectedUser = {}, action) => {
    switch (action.type) {
        case "LOGIN" :
            connectedUser = action.payload;
            return connectedUser;
        case "MODIFIER_PROFIL" :
            connectedUser = action.payload;
            return connectedUser;
        case "UPDATE_SOLDE" :
            connectedUser.solde-=action.payload.montant;
            
            return connectedUser;
        default:
            return connectedUser;
    }

};
export default connectedUserReducer;

