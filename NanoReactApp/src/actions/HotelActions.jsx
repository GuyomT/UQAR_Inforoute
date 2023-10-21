import axios from "axios";


const baseUrl = "https://api.travelpayouts.com";
const token='45fddd3307f3710f1477e4871cedd748';

export const chercheVol = () => {
return (dispatch) => {
    axios.get(`${baseUrl}/v1/prices/calendar?origin=YUL&destination=CDG&depart_date=2023-11&return_date=2023-12&token=${token}&currency=CAD`)
    .then(
        (response)=> {
            dispatch({type:"CHERCHER_VOL", payload : response.data})

        },
        (error)=> {
            dispatch({type:"CHERCHER_VOL", payload :[]})

        },
    )
}
}
export const reserverHotel = (hotel,nombreDePassager) => {
    return {
        type: "RESERVER_HOTEL",
        payload: {
            


        },
    };
}




