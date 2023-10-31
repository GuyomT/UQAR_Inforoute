const initialState = {
    users: [],
    countries: [],
  };

  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_USER':
        return { ...state, users: [...state.users, action.payload] };
      case 'DELETE_USER':
        return { ...state, users: state.users.filter(user => user.id !== action.payload) };
      case 'ASSOCIATE_COUNTRY_TO_USER':
        return {
          ...state,
          users: state.users.map(user =>
            user.id === action.payload.userId
              ? { ...user, countries: [...user.countries, action.payload.country] }
              : user
          ),
        };
      case 'FETCH_COUNTRIES_SUCCESS':
        return { ...state, countries: action.payload };
      case 'FETCH_COUNTRIES_ERROR':
        console.error('Erreur lors de la récupération des pays', action.payload);
        return state;
      default:
        return state;
    }
  };

  export default rootReducer;
