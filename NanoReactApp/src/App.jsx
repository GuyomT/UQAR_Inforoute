import React from "react";
import CreerCompte from "./routes/CreerCompte";
import Connexion from "./routes/Connexion";
import NotFound from "./routes/NotFound";

import Menu from "./components/Menu";
import Hotel from "./routes/Hotel";
import Vol from "./routes/Vol";
import { HashRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Menu />
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <div>
              <Connexion  />
            </div>
          )}
        />

        <Route path="/Hotel" component={Hotel} />
        <Route path="/Vol" component={Vol} />

        <Route path="/Inscription" component={CreerCompte} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
};
export default App;

//App avec class
/*
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
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
      ],
      connectedUser: null,
    };
  }
  login = (username, password) => {
    this.setState({
      connectedUser: this.state.users.filter(
        (user) => user.username == username && user.password == password
      )[0],
    });
  };
  inscription = (firstname, lastname, email, password) => {
    let newUser = {
      id: 4,
      username: firstname + "." + lastname,
      password: password,
    };
    this.setState({
      users: [...this.state.users, newUser],
    });
    console.log(this.state.users);
  };

  render() {
    return (
     
      <HashRouter>
        <Menu/>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <div>
                <Connexion login={this.login} />
              </div>
            )}
          />
          
          <Route
            path="/Hotel"
            component={Hotel
            }
          />
          <Route
            path="/Vol"
            component={Vol
            }
          />

          <Route
            path="/Inscription"
            component={() => (
              <div>
                <CreerCompte login={this.inscription} />
              </div>
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    );
    
   
  }
}
export default App;*/
