import React, { useState } from "react";
import StaffSelectOptions from "../staff/StaffSelectOptions";
import { connect } from "react-redux";
import { addLog } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddLog = ({ addLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [user, setUser] = useState("");

  const onSubmit = () => {
    if (message === "" || user === "") {
      M.toast({ html: "Please enter a message and staff member" });
    } else {
      //set props for new log
      //commit action for new log
      addLog({
        message,
        attention,
        user,
      });

      M.toast({ html: `Task assigned for  ${user}` });

      setMessage("");
      setUser("");
      setAttention(false);
    }
  };
  return (
    <div id="add-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="user"
              value={user}
              className="browser-default"
              onChange={(e) => setUser(e.target.value)}
            >
              <option value="" disabled>
                Assign Task To:
              </option>
              <StaffSelectOptions />
            </select>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect red waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "65%",
  height: "45%",
};

export default connect(null, { addLog })(AddLog);
