import React, { useEffect, useState } from "react";
import "./Login.css";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //getting email
  const handleEmail = (e) => {
    setEmail(e.target.value);

  };

  //getting password
  const handlePassword = (e) => {
    setPassword(e.target.value);
    
  };

  //creating new user
  const handleCreatingUser = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(email, password);

    setEmail("");
    setPassword("")

  };

  
  if(user){
    navigate(from, {replace:true})
}







  //getting email
  return (
    <div className="login-field mt-5">
      <h2 className="py-3">Please login</h2>
      <form onSubmit={handleCreatingUser}>
        <br />
        <input
          onBlur={handleEmail}
          type="email"
          name="email"
          id=""
          placeholder="email"
        />
        <br />
        <br />
        <input
          onBlur={handlePassword}
          type="password"
          name="password"
          id=""
          placeholder="Password"
        />
        <br />
        <input className="btn btn-primary my-3" type="submit" value="Login" />
      </form>
      <button
        className="btn btn-primary my-3"
        onClick={() => signInWithGoogle()}
      >
        {" "}
        Sign in with google
      </button>
      <p className="pb-3">
        New Registration{" "}
        <span className="text-primary" onClick={() => navigate("/signin")}>
          SignUp
        </span>
      </p>
    </div>
  );
};

export default Login;
