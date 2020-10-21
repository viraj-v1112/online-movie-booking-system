import React, { Component } from "react";
import axios from "axios";
import URL from "../../../URL_config";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      password2: null,
      lastname: null,
      firstname: null,
      gender: null,
      dateOfBirth: null,
      phone: null,
      // loginSuccess: 'false'
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  registerClick = (e) => {
    e.preventDefault();
    axios
      .post(URL + "/api/users/register", {
        username: this.state.username,
        password: this.state.password,
        password2: this.state.password,
        gender: this.state.gender,
        dateOfBirth: this.state.dateOfBirth,
        phone: this.state.phone,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
      })
      .then((response) => {
        console.log(JSON.stringify(response));
        // if(this.state.loginSuccess === 'true')
        // this.props.history.push({
        //     pathname: "/",
        // }
        // );
        alert("Sign Up Success");
      })
      .catch((err) => {
        console.log(err.response.status);
        if (err.response.status === 302) alert("Account already exists");
        else if (err.response.status === 400) alert("Enter valid information");
      });
  };
  render() {
    return (
      <div>
        <div>
          <h3>Registration</h3>
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input
                  onChange={this.handleChange}
                  name='lastname'
                  id='fname'
                  type='text'
                  className='form-control'
                  placeholder='Name*'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='name'>Surname:</label>
                <input
                  onChange={this.handleChange}
                  name='firstname'
                  id='lname'
                  type='text'
                  className='form-control'
                  placeholder='Surname *'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>email:</label>
                <input
                  onChange={this.handleChange}
                  name='email'
                  type='email'
                  className='form-control'
                  placeholder='Email *'
                />
              </div>
              <div className='form-group'>
                <label>Username</label>
                <input
                  onChange={this.handleChange}
                  name='username'
                  id='name'
                  type='text'
                  className='form-control'
                  placeholder='Username *'
                />
              </div>
              <label>Sex</label>
              <div className='form-group'>
                <input
                  onChange={this.handleChange}
                  name='gender'
                  type='radio'
                  // eslint-disable-next-line
                  name='gender'
                />
                <span>male</span>
                
                <input
                  onChange={this.handleChange}
                  name='gender'
                  type='radio'
                  // eslint-disable-next-line
                  name='gender'
                />
                <span> Female </span>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label>Password:</label>
                <input
                  onChange={this.handleChange}
                  // eslint-disable-next-line
                  name='password'
                  type='password'
                  className='form-control'
                  placeholder='Password *'
                />
              </div>
              <div className='form-group'>
                <label>Confirm Password:</label>
                <input
                  onChange={this.handleChange}
                  name='password2'
                  type='password'
                  className='form-control'
                  placeholder='Confirm Password*'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='birthDate'>Date of birth*</label>
                <input
                  onChange={this.handleChange}
                  name='dateOfBirth'
                  type='date'
                  id='birthDate'
                  className='form-control'
                />
              </div>
              <div className='form-group'>
                <label>phone number:</label>
                <input
                  onChange={this.handleChange}
                  name='phone'
                  type='phoneNumber'
                  className='form-control'
                  placeholder='phone number *'
                />
              </div>
              <span className='help-block'>
                Sections marked with * are required to be filled out
              </span>
              Through the click{" "}
              <strong className='label label-primary'>Registration</strong>, you
              did agree with{" "}
              <a href='' data-toggle='modal' data-target='#t_and_c_m'>
                Terms of Service
              </a>{" "}
              including our use of Cookies.
            </div>
          </div>
          <br />
          <br />
          <button
            onClick={this.registerClick}
            className='btn btn-primary center_button'
          >
            Registration
          </button>
        </div>
      </div>
    );
  }
}

export default Signup;
