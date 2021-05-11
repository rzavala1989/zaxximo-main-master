import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getStaff } from "../../actions/userActions";

const StaffSelectOptions = ({ getStaff, user: { users, loading } }) => {
  useEffect(() => {
    getStaff();
    // eslint-disable-next-line
  }, []);

  return (
    !loading &&
    users !== null &&
    users.map((user) => (
      <option key={user._id} value={`${user.fullName}`}>
        {`${user.fullName}`}
      </option>
    ))
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getStaff })(StaffSelectOptions);
