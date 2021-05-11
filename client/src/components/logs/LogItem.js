import React from "react";
import DayJS from "react-dayjs";
import { connect } from "react-redux";
import { deleteLog, setCurrent } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const { attention, id, _id, message, user, date } = log;

  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".tooltipped");
    M.Tooltip.init(elems);
  });

  const onDelete = () => {
    deleteLog(_id);
    M.toast({ html: `Log ${id} deleted from tasks` });
  };

  const onEdit = () => {
    setCurrent(log);
  };

  return (
    <li
      data-position="left"
      data-tooltip="Edit or reassign task"
      className={`collection-item highlight ${
        attention ? "grey lighten-1" : ""
      } 'highlight first-log`}
    >
      <div>
        <a
          onClick={onEdit}
          href="#edit-modal"
          className={`modal-trigger tooltipped ${
            attention
              ? "completed indigo-text lighten-4"
              : " modal-trigger tooltipped indigo-text"
          }`}
        >
          {message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{id}</span> assigned to{" "}
          <span className="black-text">{user}</span>
          {attention ? (
            <span>
              <span>&nbsp;</span>
              <span id="completed-text" className="indigo darken-4>">
                &nbsp;Completed&nbsp;
              </span>{" "}
              <strong>
                <span style={{ color: "black" }}>
                  on{" "}
                  {
                    <DayJS format="ddd, MMM D, YYYY, h:mm A">
                      {Date.now()}
                    </DayJS>
                  }
                </span>
              </strong>
            </span>
          ) : (
            <span>
              {" "}
              on <DayJS format="ddd, MMM D, YYYY, h:mm A">{date}</DayJS>
            </span>
          )}
        </span>
        <a onClick={onDelete} href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
