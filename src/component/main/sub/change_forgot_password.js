import React, { Component } from "react";
import axios from "axios";
import URL from "../../../URL_config";
class change_pass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      newPassword: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  changePassClick = (e) => {
    e.preventDefault();
    console.log(window.document.location.pathname);
    axios
      .post(URL + window.document.location.pathname, {
        password: this.state.password,
        newPassword: this.state.newPassword,
      })
      .then((response) => {
        alert("Password changed successfully");
        this.props.history.push({
          pathname: "/sign_in/",
        });
      })
      .catch((response) => {
        //handle error
        alert("An error has occurred");
        console.log(response);
      });
  };
  render() {
    return (
      <main>
        <div className='container'>
          <h3>Change password</h3>
          <form action>
            <div className='form-group' style={{ marginLeft: "35%" }}>
              <label htmlFor='pwd'>New password:</label>
              <input
                onChange={this.handleChange}
                name='password'
                type='password'
                className='form-control'
                id='pwd'
                style={{ width: "40%" }}
                placeholder='Enter the password'
              />
            </div>
            <div className='form-group' style={{ marginLeft: "35%" }}>
              <label htmlFor='pwd'>Confirm password:</label>
              <input
                onChange={this.handleChange}
                name='newPassword'
                type='password'
                className='form-control'
                id='pwd2'
                style={{ width: "40%" }}
                placeholder='Confirm password'
              />
            </div>
            {/* Submit*/}
            <button
              onClick={this.changePassClick}
              className='btn btn-primary'
              style={{ marginLeft: "35%" }}
            >
              Change password
            </button>
          </form>
        </div>
      </main>
    );
  }
}

export default change_pass;
