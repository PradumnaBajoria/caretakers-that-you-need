import React from "react";
import { Link } from "react-router-dom";
import "./Landing.scss";

function Landing() {
  return (
    <div className="landing">
      <h1>
        <marquee>Caretakers! That you need</marquee>
      </h1>
      <div className="login">
        <Link to="/login">
          <h3>Login</h3>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
