import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword,user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const [signInWithGoogle] = useSignInWithGoogle(auth);


console.log(user);

  //getting email
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  //getting password
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  if(user){
    navigate("/home");
}

//creating new user
  const handleCreatingUser = (e) => {
      e.preventDefault()

    createUserWithEmailAndPassword(email, password);
  };



  console.log(user);
  
  return (
    <div>
      <div>
        <form onSubmit={handleCreatingUser}>
          <label htmlFor="email">Email</label>
          <input
            onBlur={handleEmail}
            type="email"
            name="email"
            id=""
            placeholder="email"
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            onBlur={handlePassword}
            type="password"
            name="password"
            id=""
            placeholder="Password"
          />
          <br />
          <input type="submit" value="Login" />
        </form>
        <p>{error}</p>
        <button onClick={()=>signInWithGoogle()} > Sign in with google</button>
        <p>Already have an Account <span className="text-primary" onClick={()=>navigate("/login")}>Login</span></p>
      </div>
    </div>
  );
};

export default Signin;
