
import utilisateursReducer from "./UtilisateursReducer";


const connectedUserReducer = (connectedUser = {}, action) => {
    switch (action.type) {
        case "LOGIN" :
            let users= utilisateursReducer({},"GetUser");
            connectedUser = users.filter((user) => user.username == action.payload.username && user.password == action.payload.password )[0]
            return connectedUser;
        default:
            return connectedUser;
    }

};
export default connectedUserReducer;

