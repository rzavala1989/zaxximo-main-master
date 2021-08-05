import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions/userActions';
import M from 'materialize-css/dist/js/materialize.min.js';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const {
      isAuthenticated,
      user: { firstName, lastName },
    } = this.props.user;

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems);
    });

    const guestLinks = (
      <Fragment>
        <li>
          <Link className='navlinks' to='/about'>
            About
          </Link>
        </li>
        <li>
          <Link className='navlinks' to='/register'>
            Register
          </Link>
        </li>
        <li>
          <Link className='navlinks' to='/login'>
            Login
          </Link>
        </li>
      </Fragment>
    );

    const authLinks = (
      <Fragment>
        <li className='navlinks' style={{ color: 'chartreuse' }}>
          Welcome, {firstName} {lastName}!{' '}
        </li>
        <li>
          <Link className='navlinks' to='/about'>
            About
          </Link>
        </li>
        <li>
          <Link className='navlinks' to='/login' onClick={this.onLogoutClick.bind(this)}>
            Logout
          </Link>
        </li>
      </Fragment>
    );

    return (
      <div>
        <nav
          style={{
            borderBottom: '8px solid #ece8ff',
          }}
        >
          <div className='nav-wrapper'>
            <Link to='/' className='brand-logo' id='zaxximo-logo'>
              {' '}
              Zaxximo
            </Link>
            <a href='#' data-target='mobile-demo' class='sidenav-trigger' style={{ float: 'left' }}>
              <i class='material-icons'>menu</i>
            </a>

            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              {isAuthenticated ? authLinks : guestLinks}
            </ul>

            <ul class='sidenav' id='mobile-demo' style={{ float: 'right' }}>
              <li>
                <Link to='/about'>About</Link>
              </li>
              {isAuthenticated ? authLinks : guestLinks}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
