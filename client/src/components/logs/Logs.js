import React, { useEffect, Fragment } from 'react';
import Preloader from '../layout/Preloader';
import { getLogs } from '../../actions/logActions';
import FilterSelect from '../layout/FilterSelect';
import { CSSTransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import LogItem from './LogItem';

//grab from bottom of file mapstatetoprops
const Logs = ({ log: { logs, loading }, filters: { sortBy }, getLogs }) => {
  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems);
  });

  useEffect(() => {
    //render logs
    getLogs();
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <Fragment>
      <ul className='collection with-header z-depth-4'>
        <div className='collection-header'>
          <h4 className='center'>System Logs</h4>
        </div>
        <li className='instruction-panel collection-item grey lighten-2'>
          <span id='t-head'>
            <strong>Logs</strong>
          </span>

          <span>
            <strong>Delete Log</strong>
          </span>
        </li>
        <FilterSelect />
        <div style={{ height: '10px', backgroundColor: '#777777' }}></div>
        {!loading && logs.length === 0 ? (
          <p className='center'>No logs to show...</p>
        ) : sortBy === 'attention' ? (
          logs
            .filter((l) => l.attention)
            .map((log) => (
              <CSSTransitionGroup
                transitionName='list-item'
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
        ) : (
          logs.map((log) => (
            <CSSTransitionGroup
              transitionName='list-item'
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
        <div style={{ height: '20px', backgroundColor: '#EAEFF5' }}></div>
      </ul>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  log: state.log,
  filters: state.filters,
  current: null,
  loading: false,
  error: null,
});

export default connect(mapStateToProps, { getLogs })(Logs);
