import React from "react";

function UserForm() {
  return (
    <div className="booking-form  offset-sm-1 mt-4 p-4">
      <form>
        <div class="row">
          <div class="col ">
            <strong>
              <label className="">Parent Name</label>
            </strong>
            <input className="form-control" type="text" />
          </div>
          <div class="col ">
            <strong>
              <label className="">Child Name</label>
            </strong>
            <input className="form-control" type="text" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <strong>
              <label className="">Email</label>
            </strong>

            <input className="form-control" type="email" />
          </div>
          <div class="col">
            <strong>
              <label className="">Fee</label>
            </strong>
            <input className="form-control" type="text" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <strong>
              <label className="">Arrival Time</label>
            </strong>
            <input className="form-control" type="text" />
          </div>
          <div class="col">
            <strong>
              <label className="">Departure Time</label>
            </strong>
            <input className="form-control" type="text" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <strong>
              <label className="">Status</label>
            </strong>

            <input className="form-control" type="text" />
          </div>
          <div class="col">
            <strong>
              <label className="">Advice from parent</label>
            </strong>
            <input className="form-control" type="text" />
          </div>
        </div>
        <div className="submit p-3">
            <input
              className="form-control"
              type="submit"
              placeholder="Submit"
              // onChange={handleChange("password")}
              // value={password}
            />
          </div>
      </form>
    </div>
  );
}

export default UserForm;
