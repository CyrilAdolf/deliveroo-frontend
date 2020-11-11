import React from "react";
import logo from "../assets/deli.jpg";

const Header = ({ restaurant, isLoading }) => {
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="header">
      <div className="container">
        <img className="logo" src={logo} alt="logo deliveroo" />
        <div className="columns">
          <div className="col-1">
            <h1>{restaurant.name}</h1>
            <p>{restaurant.description}</p>
          </div>
          <img
            className="col-2"
            src={restaurant.picture}
            alt={restaurant.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
