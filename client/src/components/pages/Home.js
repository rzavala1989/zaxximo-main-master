import React, { Component } from "react";
import AddButton from "../../components/layout/AddButton";
import AddLog from "../../components/logs/AddLog";
import EditLog from "../../components/logs/EditLog";
import AddStaff from "../../components/staff/AddStaff";
import StaffListModal from "../../components/staff/StaffListModal";
import Logs from "../../components/logs/Logs";
import SiteImage from "../../components/layout/SiteImage";
import InfoCard from "../../components/layout/InfoCard";
import { connect } from "react-redux";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "../../App.css";

class Home extends Component {
  componentDidMount() {
    // if (this.props.auth.isAuthenticated) {
    //   this.props.history.push("/");

    M.AutoInit();
  }

  render() {
    return (
      <div className="my-container">
        <section className="primary">
          <AddButton />
          <AddLog />
          <EditLog />
          <AddStaff />
          <StaffListModal />
          <Logs />
        </section>
        <section className="secondary">
          <SiteImage />
          <InfoCard />
        </section>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

export default /*connect(mapStateToProps)*/ Home;
