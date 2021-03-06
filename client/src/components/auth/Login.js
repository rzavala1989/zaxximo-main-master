import React, { Component, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/userActions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // componentDidMount() {
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push("/");
  //   }
  // }
  componentWillReceiveProps(nextProps) {
    // Check if user is logged in
    if (nextProps.user.isAuthenticated) {
      this.props.history.push('/');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData);
  }
  render() {
    const { errors } = this.state;

    return (
      <div class='full-screen-container'>
        <div class='login-container'>
          <h3 class='login-title'>LOG IN</h3>
          <form name='Subscription Form' onSubmit={this.onSubmit}>
            <div class='input-group'>
              <label>Email</label>
              <span className='red-text'>{errors.email}</span>
              <input
                id='email'
                type='email'
                className={classnames('', {
                  invalid: errors.email,
                })}
                name='email'
                value={this.state.email}
                onChange={this.onChange}
                error={errors.email}
              />
            </div>
            <div class='input-group'>
              <label>Password</label>
              <span className='red-text'>{errors.password}</span>
              <input
                type='password'
                name='password'
                className={classnames('', {
                  invalid: errors.password,
                })}
                value={this.state.password}
                onChange={this.onChange}
                error={errors}
                minLength='6'
              />
            </div>
            <div class='input-group'>
              <button type='submit' class='login-button'>
                Sign In
              </button>
              <h6 style={{ color: 'chartreuse' }}>For demo purposes (admin user):</h6>
              <ul style={{ color: 'chartreuse' }}>
                <li>email: jamescash@gmail.com</li>
                <li>password: jamescash</li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
