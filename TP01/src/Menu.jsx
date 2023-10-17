import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul>
      <li>
        <Link to="/search-flight">Rechercher des vols</Link>
      </li>
      <li>
        <Link to="/search-hotel">Rechercher des hôtels</Link>
      </li>
    </ul>
  );
};

export default Menu;
