import React from "react";
import { connect } from "react-redux";
import { deleteStaff } from "../../actions/staffActions";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";

const StaffItem = ({ staff, deleteStaff }) => {
  const onDelete = () => {
    deleteStaff(staff._id);
    M.toast({ html: `Staff member deleted: ${staff.fullName}` });
  };

  return (
    <li className="collection-item">
      <div>
        {staff.firstName} {staff.lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

StaffItem.propTypes = {
  staff: PropTypes.object.isRequired,
};

export default connect(null, { deleteStaff })(StaffItem);
