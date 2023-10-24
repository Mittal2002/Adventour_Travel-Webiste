import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
export default function Login1() {
  return (
    <>
      <div className="outerDiv">
        <div className="innerDiv">
          <h2 className="Login_First_name">Login In</h2>
          <form>
            <input
              name="email"
              id="email"
              placeholder="Email"
              type="email"
              required
            />
            <br />
            <br />
            <input
              name="password"
              id="password"
              placeholder="Password"
              type="password"
              required
            />

            <br />
            <Link to="/Home">
              <button style={{ width: "100%" }}>Login In</button>
            </Link>
            <Link to="/">
              <button style={{ width: "100%" }}>SignOut</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
