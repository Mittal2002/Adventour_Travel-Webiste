import React from "react";
import { database } from "./FireBaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css";
export default function RegisterAndLogin() {
  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(database, email, password).then((data) => {
      console.log(data, "authData");
      history("./Login1");
    });
  };
  const changePage = (e) => {
    history("./Login1");
  };
  return (
    <div className="outerDiv">
      <div className="innerDiv">
        <h2 className="Login_First_name">Sign up!</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input name="email" placeholder="Email" type="email" required />
          <input
            name="password"
            placeholder="Password"
            type="password"
            required
          />
          <button>SignUp</button>
          <button onClick={changePage}>Login In </button>
        </form>
      </div>
    </div>
  );
}
