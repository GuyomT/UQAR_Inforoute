import axios from "axios";


const baseUrl = "https://api.travelpayouts.com";
const token='45fddd3307f3710f1477e4871cedd748';

// export const chercheVol = () => {
// return (dispatch) => {
//     axios.get(`${baseUrl}/v1/prices/calendar?origin=YUL&destination=CDG&depart_date=2023-11&return_date=2023-12&token=${token}&currency=CAD`)
//     .then(
//         (response)=> {
//             dispatch({type:"CHERCHER_VOL", payload : response.data})

//         },
//         (error)=> {
//             dispatch({type:"CHERCHER_VOL", payload :[]})

//         },
//     )
// }
// }
export const reserverVol = (vol,nombreDePassager) => {
    return {
        type: "RESERVER_VOL",
        payload: {
            Origin: vol.origin,
            Destination: vol.destination,
            Airline: vol.airline,
            DateDeDepart: vol.departure_at,
            DateDeRetour: vol.return_at,
            NumeroDeVol: vol.flight_number,
            Prix: vol.price,
            NombreDePassager:nombreDePassager


        },
    };
}




