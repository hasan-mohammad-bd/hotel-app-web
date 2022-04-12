import React from "react";
import "./Header.css";
import logo from "../../images/logo (2).png";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="navbar">
      <div className="d-flex container justify-content-between align-items-center py-2">
        <div className="img-holder">
          <img className="img-fluid" src={logo} alt="" />
        </div>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/packages">Packages</Link>
          {
            user? <button onClick={()=>signOut(auth)} className="btn btn-primary ms-3">logout</button> : <Link to="/login">Login</Link>
          }
        </nav>
      </div>
    </div>
  );
};

export default Header;
