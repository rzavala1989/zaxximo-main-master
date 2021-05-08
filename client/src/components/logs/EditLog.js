import React, { useState, useEffect } from "react";
import StaffSelectOptions from "../staff/StaffSelectOptions";
import { connect } from "react-redux";
import { updateLog } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const EditLog = ({ log: { current }, updateLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [staff, setStaff] = useState("");

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setStaff(current.staff);
    }
  }, [current]);

  const onSubmit = () => {
    if (!message || !staff) {
      M.toast({ html: "Please fill out message and staff fields" });
    } else {
      const updated = {
        id: current._id,
        message,
        attention,
        staff,
        // date: new Date(),
      };
      updateLog(updated);
      if (updated.message !== current.message) {
        M.toast({
          html: `"${current.message}" has been updated to "${updated.message}"`,
        });
      } else if (updated.staff !== current.staff) {
        M.toast({
          html: `"${current.message}" has been reassigned to ${updated.staff}`,
        });
      } else if (updated.attention !== current.attention) {
        M.toast({
          html: "Task has been completed",
        });
      }
    }
    setMessage("");
    setStaff("");
    setAttention(false);
  };
  return (
    <div id="edit-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Update System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <label htmlFor=""></label>
            <select
              name="staff"
              value={staff}
              className="browser-default"
              onChange={(e) => setStaff(e.target.value)}
            >
              <option value="" disabled>
                Reassign Task To:
              </option>
              <StaffSelectOptions />
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Is Completed</span>
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
  width: "65%",
  height: "55%",
};

const mapStatetoProps = (state) => ({
  log: state.log,
});

export default connect(mapStatetoProps, { updateLog })(EditLog);
