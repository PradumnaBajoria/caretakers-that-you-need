import React from "react";
import Home from "../home/home";
import "./Children.scss";
import ChildrenData from "./ChildrenData";
import ChildrenForm from "./ChildrenForm";

function Children() {
  return (
    <Home>
      <div className="children">
        <div className="header">
          <h1>Children</h1>
        </div>

        {/* Form */}
        <div className="form">
          <ChildrenForm />
        </div>

        {/* Data */}
        <div className="emp">
          <ChildrenData />
        </div>
      </div>
    </Home>
  );
}

export default Children;
