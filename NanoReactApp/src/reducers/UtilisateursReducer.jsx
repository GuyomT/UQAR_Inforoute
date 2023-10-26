let initial_users =  [
    {
      id: 1,
      firstname: "Albert",
      lastname: "Albert",
      email: "Albert@gmail.com",
      password: "Albert",
      dateDeNaissance:"2000-01-01",
      solde:10000
    },
    {
      id: 2,
      firstname: "Rudina",
      lastname: "Rudina",
      email: "Rudina@gmail.com",
      password: "Rudina",
      dateDeNaissance:"2000-01-01",
      solde:20000
    },
    {
      
      id: 3,
      firstname: "Paul",
      lastname: "Paul",
      email: "Paul@gmail.com",
      password: "Paul",
      dateDeNaissance:"2000-01-01",
      solde:20000
    },
];


const utilisateursReducer = (users = initial_users, action) => {
    switch (action.type) {
        case "INSCRIPTION" :
            return [...users, action.payload];
        case "MODIFIER_PROFIL" :
            return users;
        case "GetUsers" :
            return users;
        case "UPDATE_USER" :
            return users.map((user) => user.id != action.payload.id
            ? user : {
                  id:action.payload.id,
                  firstname: action.payload.firstname,
                  lastname: action.payload.lastname,
                  email: action.payload.email,
                  password: action.payload.password,
                  dateDeNaissance:action.payload.dateDeNaissance,
                  solde:action.payload.solde
              });
        default:
            return users;
    }

};
export default utilisateursReducer;