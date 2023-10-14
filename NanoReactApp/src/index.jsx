import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import utilisateursReducer from "./reducers/UtilisateursReducer";
import connectedUserReducer from "./reducers/ConnectedUserReducer"

const store = createStore(
  combineReducers({ users: utilisateursReducer , connectedUser: connectedUserReducer}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
