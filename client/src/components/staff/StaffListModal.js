import React, { useEffect } from "react";

import StaffItem from "./StaffItem";
import { connect } from "react-redux";
import { getStaff } from "../../actions/userActions";

// import LogItem from "./LogItem";

const StaffListModal = ({ getStaff, user: { users, loading } }) => {
  useEffect(() => {
    getStaff();
  }, []);

  return (
    <div id="staff-list-modal" className="modal">
      <div className="modal-content">
        <h4>List of Staff Members</h4>
        <ul className="collection">
          {!loading &&
            users !== null &&
            users.map((user) => (
              <li className="collection-item">
                <StaffItem user={user} key={user._id} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getStaff })(StaffListModal);
