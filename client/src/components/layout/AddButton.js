import React, { Fragment } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddButton = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".tooltipped");
    M.Tooltip.init(elems);
  });

  return (
    <Fragment>
      <div className="fixed-action-btn">
        <a
          href="#add-modal"
          className="btn-floating pulse btn-large red darken-4 modal-trigger tooltipped"
          data-position="left"
          data-tooltip="Add a task"
        >
          <i className="large material-icons">add</i>
        </a>
        <ul>
          <li>
            <a
              href="#staff-list-modal"
              className="btn-floating green modal-trigger tooltipped"
              data-position="left"
              data-tooltip="View staff list"
            >
              <i className="material-icons">person</i>
            </a>
          </li>
          <li>
            <a
              href="#add-staff-modal"
              className="btn-floating red modal-trigger tooltipped"
              data-position="left"
              data-tooltip="Add staff member"
            >
              <i className="material-icons">person_add</i>
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default AddButton;
