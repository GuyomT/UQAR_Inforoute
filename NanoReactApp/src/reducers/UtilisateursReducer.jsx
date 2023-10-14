let initial_users =  [
    {
      id: 1,
      username: "Albert",
      password: "Albert",
    },
    {
      id: 2,
      username: "Rudina",
      password: "Rudina",
    },
    {
      id: 3,
      username: "Paul",
      password: "Paul",
    },
];


const utilisateursReducer = (users = initial_users, action) => {
    switch (action.type) {
        case "INSCRIPTION" :
            return [...users, action.payload];
        case "GetUsers" :
            return users;
        default:
            return users;
    }

};
export default utilisateursReducer;