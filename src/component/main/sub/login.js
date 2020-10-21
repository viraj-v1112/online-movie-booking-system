import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import fakeAuth from "./private_route";
class Login extends Component {
  render() {
    return (
      <div>
        <div className='form-group' style={{ marginLeft: "35%" }}>
          <label htmlFor='text'>Username:</label>
          <input
            type='text'
            className='form-control'
            id='email'
            style={{ width: "40%" }}
            placeholder='Enter your username'
            name='username'
          />
        </div>
        <div className='form-group' style={{ marginLeft: "35%" }}>
          <label htmlFor='pwd'>Password:</label>
          <input
            type='password'
            className='form-control'
            id='pwd'
            style={{ width: "40%" }}
            placeholder='Enter the password'
            name='pwd'
          />
        </div>
        <div className='checkbox' style={{ marginLeft: "35%" }}>
          <label>
            <input type='checkbox' name='remember' /> Remember your account name
          </label>
          <Link
            to='/forgot_pass'
            className='btn btn-link'
            style={{ marginLeft: "5%" }}
          >
            Forgot password?
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
