import { v4 } from "uuid";

export const payement = (vols, hotels) => {
  let Total = vols.reduce((a, v) => (a = a + v.Prix * v.NombreDePassager), 0);
  Total += hotels.reduce((a, v) => (a = a + v.Prix * v.NombreDePassager), 0);
  return (dispatch) => {
    dispatch({
      type: "PAYEMENT",
      payload: {
        Id: v4(),
        DateDepayement: new Date().toLocaleString(),
        Total: Total,
        Vols: vols,
        Hotels: hotels,
      },
    });
    dispatch({ type: "REINITIALISER_HOTEL" });
    dispatch({ type: "REINITIALISER_VOL" });

    dispatch({ type: "UPDATE_SOLDE", payload: { montant: Total } });
  };
};
