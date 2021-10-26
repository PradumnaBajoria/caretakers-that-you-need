import React from 'react'

function UserForm() {
    return (
      <div className="row mt-4 ">
      <div className="col-6 col-md-4  offset-sm-1 ">
        <form>
          {/* Component for name */}
          <div className="form-group ">
            <label className="">Parent Name</label>
            <input
              className="form-control"
              // onChange={handleChange("name")}
              type="text"
              // value={name}
            />
          </div>

          {/* Component for email */}
          <div className="form-group">
            <label className="">Child Name</label>
            <input className="form-control" type="email" />
          </div>

          {/* Component for password */}
          <div className="form-group">
            <label className="">Gender</label>

            <input
              className="form-control"
              type="password"
              // onChange={handleChange("password")}
              // value={password}
            />
          </div>
        </form>
      </div>

      <div className=" col-6 col-md-4 offset-sm-2 ">
        <form>
          {/* Component for name */}
          <div className="form-group ">
            <label className="">Age</label>
            <input
              className="form-control"
              // onChange={handleChange("name")}
              type="text"
              // value={name}
            />
          </div>

          {/* Component for email */}
          <div className="form-group">
            <label className="">Email</label>
            <input className="form-control" type="email" />
          </div>

          {/* Component for password */}
          <div className="form-group">
            <label className="">Password</label>

            <input
              className="form-control"
              type="password"
              // onChange={handleChange("password")}
              // value={password}
            />
          </div>
        </form>
      </div>
    </div>
    )
}

export default UserForm;
