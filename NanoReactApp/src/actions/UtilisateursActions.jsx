import axios from "axios";


export const inscription = (firstname, lastname, email, password, dateDeNaissance) => {
    return {
        type: "INSCRIPTION",
        payload: {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            dateDeNaissance:dateDeNaissance

        },
    };
};
export const getUser = (username, password) => {
    return {
        type: "getUser",
        payload: {
            username: username,
            password: password,
        },
    };
};

export const login = (username, password) => {
    return {
        type: "LOGIN",
        payload: {
            username: username,
            password: password,
        },
    };
};