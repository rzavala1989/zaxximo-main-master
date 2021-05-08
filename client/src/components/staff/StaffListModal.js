import React, { useEffect } from "react";

import StaffItem from "./StaffItem";
import { connect } from "react-redux";
import { getStaff } from "../../actions/staffActions";

// import LogItem from "./LogItem";

const StaffListModal = ({ getStaff, staff: { staff, loading } }) => {
  useEffect(() => {
    getStaff();
  }, []);

  return (
    <div id="staff-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            staff !== null &&
            staff.map((staff) => (
              <li className="collection-item">
                <StaffItem staff={staff} key={staff._id} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  staff: state.staff,
});

export default connect(mapStateToProps, { getStaff })(StaffListModal);
