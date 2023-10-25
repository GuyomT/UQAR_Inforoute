import { v4 } from "uuid";

export const inscription = (
  firstname,
  lastname,
  email,
  password,
  dateDeNaissance
) => {
  return {
    type: "INSCRIPTION",
    payload: {
      id: v4(),
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      dateDeNaissance: dateDeNaissance,
      solde: 1000,
    },
  };
};
export const getUser = (email, password) => {
  return {
    type: "getUser",
    payload: {
      email: email,
      password: password,
    },
  };
};

export const login = (user) => {
  return {
    type: "LOGIN",
    payload: user,
  };
};

export const modifierProfil = (modifieduser) => {
  return (dispatch) => {
    dispatch({ type: "MODIFIER_PROFIL", payload: modifieduser });
    dispatch({ type: "UPDATE_USER", payload: modifieduser });
  };
};
export const deconnexion = (user) => {
  return (dispatch) => {
    dispatch({ type: "Deconnexion", payload: user });
    dispatch({ type: "Deconnexion" });
  };
};
