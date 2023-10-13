import React from "react";
import { BrowserRouter as Router, Route, Routes, Outlet, Link, Navigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import SearchFlight from "./SearchFlight";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="search-flight" element={<SearchFlight />} />
        <Route path="*" element={<Navigate to="login" />} />
      </Routes>
    </Router>
  );
}

export default App;
