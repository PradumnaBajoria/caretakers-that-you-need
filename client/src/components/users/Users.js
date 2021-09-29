import React from "react";
import Home from "../home/home";
import "./Users.scss";
import UserData from "../data/UserData"

function Users() {
  return (
    <Home>
      <div className="users">
        <div className="header">
          <h1>Employee</h1>
        </div>
        
        {/* Form */}
        <div>
          Hello there
          Hello thereHello thereHello thereHello thereHello thereHello thereHello there
          <br />
          Hello thereHello thereHello thereHello thereHello thereHello thereHello there
          <br />Hello thereHello thereHello thereHello thereHello thereHello thereHello there
          <br />Hello thereHello thereHello thereHello thereHello thereHello thereHello there
          <br />Hello thereHello thereHello thereHello thereHello thereHello thereHello there
          <br />Hello thereHello thereHello thereHello thereHello thereHello thereHello there
          <br />Hello thereHello thereHello thereHello thereHello thereHello thereHello there
          <br />Hello thereHello thereHello thereHello thereHello thereHello thereHello there
          <br />Hello thereHello thereHello thereHello thereHello thereHello thereHello there
          <br />Hello thereHello thereHello thereHello thereHello thereHello thereHello there
          <br />Hello thereHello thereHello thereHello thereHello thereHello thereHello there
          <br />Hello thereHello thereHello thereHello thereHello thereHello thereHello there
          <br />
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
