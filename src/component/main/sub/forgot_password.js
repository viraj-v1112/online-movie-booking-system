import React, { Component } from "react";
import axios from "axios";
import URL from "../../../URL_config";
class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    // this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  forgotClick = (e) => {
    e.preventDefault();
    console.log(this.state.email);
    axios
      .post(URL + "/api/users/forgot", {
        email: this.state.email,
      })
      .then((response) => {
        alert("Please check your email");
      })
      .catch((response) => {
        //handle error
        alert("Enter valid information");
        this.props.history.push({
          pathname: "/sign_in/sign_in",
        });
        console.log(response);
      });
  };
  render() {
    return (
      <div className='container'>
        <div className='modal-header'>
          <h3 className='modal-title'>Forgot password</h3>
        </div>
        <div className='modal-body'>
          <p>
            Enter your email so we can send you a confirmation and help you
            recover password reset
          </p>

          <div className='form-group center_textbox'>
            <label htmlFor='email'>Retype Email:</label>
            <input
              onChange={this.handleChange}
              type='email'
              className='form-control'
              id='email'
              placeholder='Enter your email'
              name='email'
            />
          </div>
        </div>
        <div className='modal-footer'>
          <button
            onClick={this.forgotClick}
            type='button'
            className='btn btn-primary center_button'
          >
            <a href='change_pwd.html' style={{ color: "white" }}>
              To send
            </a>
          </button>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
