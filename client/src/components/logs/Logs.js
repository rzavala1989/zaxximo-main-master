import React, { useEffect, Fragment } from "react";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import { getLogs } from "../../actions/logActions";

import { connect } from "react-redux";
import { CSSTransitionGroup } from "react-transition-group";
import M from "materialize-css/dist/js/materialize.min.js";

//grab from bottom of file mapstatetoprops
const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
  }, []);

  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".tooltipped");
    M.Tooltip.init(elems);
  });

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <Fragment>
      <ul className="collection with-header z-depth-4">
        <div className="collection-header">
          <h4 className="center">System Logs</h4>
        </div>
        <li className="collection-item red lighten-1">
          <span id="t-head">
            <strong>Logs</strong>
          </span>
          <span id="t-head-icon">
            <strong>Delete Log</strong>
          </span>
        </li>
        <div style={{ height: "10px", backgroundColor: "#EAEFF5" }}></div>

        {!loading && logs.length === 0 ? (
          <p className="center">No logs to show...</p>
        ) : (
          logs.map((log) => (
            <CSSTransitionGroup
              transitionName="list-item"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnter={true}
              transitionEnterTimeout={500}
              transitionLeave={true}
              transitionLeaveTimeout={300}
            >
              <li>
                <LogItem log={log} key={log._id} />
              </li>
            </CSSTransitionGroup>
          ))
        )}
        <div style={{ height: "20px", backgroundColor: "#EAEFF5" }}></div>
      </ul>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  log: state.log,
  current: null,
  loading: false,
  error: null,
});

export default connect(mapStateToProps, { getLogs })(Logs);
