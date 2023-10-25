import React from "react";
import CreerCompte from "./routes/CreerCompte";
import Connexion from "./routes/Connexion";
import NotFound from "./routes/NotFound";
import Menu from "./components/Menu";
import Hotel from "./routes/Hotel";
import Vol from "./routes/Vol";
import { HashRouter, Route, Routes } from "react-router-dom";
import Profil from "./routes/Profil";
import Facture from "./routes/Facture";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <HashRouter>
      <Menu />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <Connexion />
            </div>
          }
        />

        <Route exact path="/Hotel" element={<Hotel></Hotel>} />
        <Route exact path="/Vol" element={<Vol></Vol>} />

        <Route exact path="/Facture" element={<Facture></Facture>} />
        <Route
          exact
          path="/Inscription"
          element={<CreerCompte></CreerCompte>}
        />
        <Route exact path="/Profil" element={<Profil></Profil>} />
        <Route exact element={<NotFound></NotFound>} />
      </Routes>
    </HashRouter>
  );
};
export default App;
