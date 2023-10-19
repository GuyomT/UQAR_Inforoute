
import utilisateursReducer from "./UtilisateursReducer";


const connectedUserReducer = (connectedUser = {}, action) => {
    switch (action.type) {
        case "LOGIN" :
            let users= utilisateursReducer({},"GetUser");
            connectedUser = action.payload;
            return connectedUser;
        default:
            return connectedUser;
    }

};
export default connectedUserReducer;

