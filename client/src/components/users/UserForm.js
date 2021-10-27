import React from "react";

function UserForm() {
  return (
    <div className="user-form  offset-sm-1 mt-4 p-4">
      <form>
        <div class="row">
          <div class="col ">
            <strong>
              <label className="">Name</label>
            </strong>
            <input className="form-control" type="text" />
          </div>
          <div class="col ">
            <strong>
              <label className="">Phone Number</label>
            </strong>
            <input className="form-control" type="text" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <strong>
              <label className="">Email ID</label>
            </strong>
            <input className="form-control" type="email" />
          </div>
          <div class="col">
            <strong>
              <label className="">Age</label>
            </strong>
            <input className="form-control" type="text" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <strong>
              <label className="">Gender</label>
            </strong>
            <input className="form-control" type="text" />
          </div>
          <div class="col">
            <strong>
              <label className="">Experience(in years)</label>
            </strong>
            <input className="form-control" type="text" />
          </div>
        </div>
        {/* <div class="row">
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
        </div> */}
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
