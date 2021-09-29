import React from "react";
import Home from "../home/home";
import "./Bookings.scss";
import BookingForm from "./BookingForm.js";
import BookingData from "./BookingData.js";

function Bookings() {
  return (
    <Home>
      <div className="bookings">
        <div className="header">
          <h1>Bookings</h1>
        </div>

        {/* Form */}
        <div className="form">
          <BookingForm />
        </div>

        {/* Data */}
        <div className="emp">
          <BookingData />
        </div>
      </div>
    </Home>
  );
}

export default Bookings;
