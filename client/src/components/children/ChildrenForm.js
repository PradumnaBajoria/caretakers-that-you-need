import React from 'react'

function UserForm() {
    return (
        <div>
            <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            {/* Component for name */}
            <div className="form-group">
              <label className="text-light">Name</label>
              <input
                className="form-control"
                // onChange={handleChange("name")}
                type="text"
                // value={name}
              />
            </div>

            {/* Component for email */}
            <div className="form-group">
              <label className="text-light">Email</label>
              <input
                className="form-control"
                type="email"
                
                />
            </div>

            {/* Component for password */}
            <div className="form-group">
              <label className="text-light">Password</label>

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
        </div>
    )
}

export default UserForm;
