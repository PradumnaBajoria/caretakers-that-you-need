import React from "react";
import Home from "../home/home";
import "./Users.scss";
import UserData from "./UserData";
import UserForm from "./UserForm";

function Users() {
  return (
    <Home>
      <div className="users">
        <div className="header">
          <h1>Employee</h1>
        </div>

        {/* Form */}
        <div className="form">
          <UserForm />
        </div>

        {/* Data */}
        <div className="emp">
          <UserData />
        </div>
      </div>
    </Home>
  );
}

export default Users;
