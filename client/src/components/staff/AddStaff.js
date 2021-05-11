import React, { useState } from "react";
import { connect } from "react-redux";
import { addStaff } from "../../actions/userActions";
import M from "materialize-css";

const AddStaff = ({ addStaff }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [privilege, setPrivilege] = useState(false);

  const onSubmit = () => {
    // const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (firstName === "" || lastName === "") {
      M.toast({ html: "First and last name are required" });
    } else if (email === "") {
      M.toast({ html: "Please enter a valid email" });
    } else if (password === "") {
      M.toast({ html: "Password is required" });
    } else if (password !== password2) {
      M.toast({ html: "Passwords must match!!!" });
    } else {
      addStaff({
        firstName,
        lastName,
        email,
        password,
        password2,
        privilege,
      });
      M.toast({ html: "New staff member added!" });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setPassword2("");
      setPrivilege(false);
    }
  };
  return (
    <div id="add-staff-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Add Staff</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email" className="active">
              Email Address
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password" className="active">
              Establish Member Password
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="password"
              name="password2"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            <label>Confirm Member Password</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={privilege}
                  value={privilege}
                  onChange={(e) => setPrivilege(!privilege)}
                />
                <span>Is Admin</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "45%",
  height: "75%",
};

export default connect(null, { addStaff })(AddStaff);
