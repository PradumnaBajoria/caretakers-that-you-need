import React, { useState, useEffect } from "react";
import axios from "axios";

function UserForm() {
  const [parent, setParent] = useState("");
  const [child, setChild] = useState("");
  const [email, setEmail] = useState("");
  const [fee, setFee] = useState("");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [status, setStatus] = useState("");
  const [advise, setAdvise] = useState("");

  return (
    <div className="booking-form  offset-sm-1 mt-4 p-4">
      <form>
        <div class="row">
          <div class="col ">
            <strong>
              <label className="">Parent Name</label>
            </strong>
            <input
              className="form-control"
              type="text"
              value={parent}
              onChange={(e) => {
                setParent(e.target.value);
              }}
            />
          </div>
          <div class="col ">
            <strong>
              <label className="">Child Name</label>
            </strong>
            <input
              className="form-control"
              type="text"
              value={child}
              onChange={(e) => {
                setChild(e.target.value);
              }}
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <strong>
              <label className="">Email</label>
            </strong>

            <input
              className="form-control"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div class="col">
            <strong>
              <label className="">Fee</label>
            </strong>
            <input
              className="form-control"
              type="text"
              value={fee}
              onChange={(e) => {
                setFee(e.target.value);
              }}
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <strong>
              <label className="">Arrival Time</label>
            </strong>
            <input
              className="form-control"
              type="text"
              value={arrival}
              onChange={(e) => {
                setArrival(e.target.value);
              }}
            />
          </div>
          <div class="col">
            <strong>
              <label className="">Departure Time</label>
            </strong>
            <input
              className="form-control"
              type="text"
              value={departure}
              onChange={(e) => {
                setDeparture(e.target.value);
              }}
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <strong>
              <label className="">Status</label>
            </strong>

            <input
              className="form-control"
              type="text"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            />
          </div>
          <div class="col">
            <strong>
              <label className="">Advice from parent</label>
            </strong>
            <input
              className="form-control"
              type="text"
              value={advise}
              onChange={(e) => {
                setAdvise(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="submit p-3">
          <input
            className="form-control"
            type="submit"
            placeholder="Submit"
            onClick={async (e) => {
              e.preventDefault();

              const alldata = {
                parents: parent,
                child: child,
                arrival: arrival,
                departure: departure,
                email: email,
                advise: advise,
                status: status,
                fee: fee
              };
              console.log(alldata)
              const res = await axios.post(
                "http://localhost:5000/app/createbook",
                alldata
              );
              console.log("after clicking the submit button add", res.data);

              setParent("");
              setChild("");
              setEmail("");
              setFee("");
              setArrival("");
              setDeparture("");
              setStatus("");
              setAdvise("");
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default UserForm;