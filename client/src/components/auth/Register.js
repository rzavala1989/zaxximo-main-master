import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/userActions';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import classnames from 'classnames';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
      privilege: false,
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // componentDidMount() {
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push("/login");
  //   }
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.email === '' || this.password === '') {
      M.toast({
        html: 'All fields are required',
      });
    } else if (this.password !== this.password2) {
      M.toast({
        html: "Passwords don't match!!!",
      });
    } else {
      const newUser = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2,
        privilege: this.state.privilege,
      };
      this.props.registerUser(newUser, this.props.history);
      console.log(newUser);
    }
  }
  render() {
    const { errors } = this.state;
    return (
      <div class='full-screen-container-sign-up'>
        <div class='login-container'>
          <h3 class='login-title'>Welcome To Zaxximo!</h3>
          <form name='Subscription Form' onSubmit={this.onSubmit}>
            <div class='name-input-group'>
              <div className='name-input'>
                <label>First Name</label>
                <span className='red-text'>{errors.firstName}</span>
                <input
                  id='firstName'
                  type='text'
                  name='firstName'
                  className={classnames('', {
                    invalid: errors.firstName,
                  })}
                  value={this.state.firstName}
                  onChange={this.onChange}
                  error={errors.firstName}
                />
              </div>

              <div className='name-input'>
                <label>Last Name</label>
                <span className='red-text'>{errors.lastName}</span>
                <input
                  id='lastName'
                  type='text'
                  name='lastName'
                  className={classnames('', {
                    invalid: errors.lastName,
                  })}
                  value={this.state.lastName}
                  onChange={this.onChange}
                  error={errors.email}
                />
              </div>
            </div>
            <div class='input-group'>
              <label>Email</label>
              <span className='red-text'>{errors.email}</span>
              <input
                id='email'
                type='email'
                name='email'
                className={classnames('', {
                  invalid: errors.email,
                })}
                value={this.state.email}
                onChange={this.onChange}
                error={errors.email}
              />
            </div>
            <div className='name-input-group'>
              <div class='name-input'>
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
                  error={errors.password}
                  minLength='6'
                />
              </div>
              <div class='name-input'>
                <label>Confirm Password</label>
                <span className='red-text'>{errors.password2}</span>

                <input
                  type='password'
                  name='password2'
                  className={classnames('', {
                    invalid: errors.password2,
                  })}
                  value={this.state.password2}
                  onChange={this.onChange}
                  error={errors.password2}
                  minLength='6'
                />
              </div>
            </div>
            <div class='input-group'>
              <label className='checkbox-group'>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={this.state.privilege}
                  value={this.state.privilege}
                  onClick={() =>
                    this.setState({ privilege: !this.state.privilege })
                  }
                />
                <span>Is Admin</span>
              </label>
              <button type='submit' class='login-button'>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      // <div id="wrapper">
      //   <div id="subscribeBox">
      //     <h2>
      //       <span class="thin">WELCOME TO </span> ZAXXIMO
      //     </h2>
      //     <p>
      //       Please fill out the following information to receive our
      //       correspondence. Your first monthly issue should arrive within a week
      //       of submitting.
      //     </p>
      //     <p className="grey-text text-darken-1">
      //       Already have an account? <Link to="/login">Log in</Link>
      //     </p>

      //     <form
      //       className="subscribeForm"
      //       name="Subscription Form"
      //       onSubmit={this.onSubmit}
      //     >
      //       <input
      //         id="firstName"
      //         type="text"
      //         placeholder="First Name*"
      //         name="firstName"
      //         value={this.state.firstName}
      //         onChange={this.onChange}
      //         error={errors.firstName}
      //       />
      //       <input
      //         id="lastName"
      //         type="text"
      //         placeholder="Last Name*"
      //         name="lastName"
      //         value={this.state.lastName}
      //         onChange={this.onChange}
      //         error={errors.lastName}
      //       />
      //       <input
      //         id="email"
      //         type="email"
      //         placeholder="Email*"
      //         name="email"
      //         value={this.state.email}
      //         onChange={this.onChange}
      //         error={errors.email}
      //       />
      //       <input
      //         id="password"
      //         type="password"
      //         placeholder="Password"
      //         name="password"
      //         value={this.state.password}
      //         onChange={this.onChange}
      //         error={errors.password}
      //         minLength="6"
      //       />
      //       <input
      //         id="password2"
      //         type="password"
      //         placeholder="Confirm Password"
      //         name="password2"
      //         value={this.state.password2}
      //         onChange={this.onChange}
      //         error={errors.password2}
      //         minLength="6"
      //       />
      //       <button
      //         style={{
      //           width: "150px",
      //           borderRadius: "3px",
      //           letterSpacing: "1.5px",
      //           marginTop: "1rem",
      //         }}
      //         type="submit"
      //         className="btn btn-large waves-effect waves-light hoverable red accent-3"
      //       >
      //         Sign up to Zaxximo
      //       </button>
      //     </form>
      //   </div>
      // </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
