import React from "react";
import "./Header.css";
import logo from "../../images/logo (2).png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <div className="d-flex container justify-content-between align-items-center py-2">
        <div className="img-holder">
          <img className="img-fluid" src={logo} alt="" />
        </div>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
