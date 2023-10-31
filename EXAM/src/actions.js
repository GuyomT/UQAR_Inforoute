import axios from 'axios';

// Ajouter un utilisateur
export const addUser = (user) => {
  console.log('Ajout de l\'utilisateur', user);
  return {
    type: 'ADD_USER',
    payload: user,
  };
};

// Supprimer un utilisateur
export const deleteUser = (userId) => {
  console.log('Suppression de l\'utilisateur', userId);
  return {
    type: 'DELETE_USER',
    payload: userId,
  };
};

// Associer un pays à un utilisateur
export const associateCountryToUser = (userId, country) => {
  console.log('Association du pays', country, 'à l\'utilisateur', userId);
  return {
    type: 'ASSOCIATE_COUNTRY_TO_USER',
    payload: { userId, country },
  };
};

// Charger les pays depuis l'API
export const fetchCountries = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,capital,flags,currencies,continents,languages');
      console.log('Pays récupérés', response.data);
      dispatch({
        type: 'FETCH_COUNTRIES_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des pays', error);
      dispatch({
        type: 'FETCH_COUNTRIES_ERROR',
        payload: error,
      });
    }
  };
};