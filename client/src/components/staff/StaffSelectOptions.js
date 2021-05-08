import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getStaff } from "../../actions/staffActions";

const StaffSelectOptions = ({ getStaff, staff: { staff, loading } }) => {
  useEffect(() => {
    getStaff();
    // eslint-disable-next-line
  }, []);

  return (
    !loading &&
    staff !== null &&
    staff.map((s) => (
      <option key={s._id} value={`${s.fullName}`}>
        {`${s.fullName}`}
      </option>
    ))
  );
};

const mapStateToProps = (state) => ({
  staff: state.staff,
});

export default connect(mapStateToProps, { getStaff })(StaffSelectOptions);
