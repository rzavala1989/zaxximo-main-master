import React from "react";
import { connect } from "react-redux";
import { deleteStaff } from "../../actions/userActions";

import M from "materialize-css/dist/js/materialize.min.js";

const StaffItem = ({ user, deleteStaff }) => {
  const onDelete = () => {
    deleteStaff(user._id);
    M.toast({ html: `Staff member deleted: ${user.fullName}` });
  };

  return (
    <li className="collection-item">
      <div>
        {user.firstName} <strong>{user.lastName}</strong>
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteStaff })(StaffItem);
