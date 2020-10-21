import React, { Component } from "react";
import Signup from "./sub/signup";
import fakeAuth from "./sub/private_route";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import URL from "../../URL_config";
class Sign_in extends Component {
  state = { redirectToReferrer: false };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginSuccess: false,
      isLoading: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  loginClick = (e) => {
    e.preventDefault();
    localStorage.removeItem("bookingList");
    localStorage.clear();
    axios
      .post(URL + "login/", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((response) => {
        localStorage.removeItem("Token");
        localStorage.setItem("Token", response.data.token);
        var dispatch = this.props.dispatch;
        dispatch({
          type: "LOG_IN",
          username: this.state.username,
          loginState: !this.props.loginState,
        });
        fakeAuth.authenticate(() => {
          this.setState({ redirectToReferrer: true });
        });
        this.props.history.push({
          pathname: "/",
        });
        localStorage.setItem("Username" , this.state.username)
      })
      .catch((response) => {
        console.log(response);
        this.props.history.push({
          pathname: "/",
        });
        if (String(response) === "Error: Network Error")
          alert("No Internet connection available");
        else alert("Username or password is incorrect");
      });
  };
  render() {
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to='/movie' />;

    return (
      <div className='container'>
        <ul className='nav nav-tabs'>
          <li className='active'>
            <a data-toggle='tab' href='#login'>
              Log in
            </a>
          </li>
          <li>
            <a data-toggle='tab' href='#register'>
              Registration
            </a>
          </li>
        </ul>

        <div className='tab-content'>
          <div id='login' className='tab-pane fade in active'>
            <h3>Log in</h3>
            <form>
              <div>
                <div className='form-group center_textbox'>
                  <label htmlFor='email'>Username:</label>
                  <input
                    onChange={this.handleChange}
                    type='username'
                    className='form-control'
                    id='username'
                    placeholder='Enter your username'
                    name='username'
                  />
                </div>
                <div className='form-group center_textbox'>
                  <label htmlFor='pwd'>Password:</label>
                  <input
                    onChange={this.handleChange}
                    type='password'
                    className='form-control'
                    id='password'
                    placeholder='Enter the password'
                    name='password'
                  />
                </div>
                <div className='checkbox center_textbox'>
                  <Link to='/forgot_pass' className='btn btn-link'>
                    Forgot password?
                  </Link>
                </div>
              </div>
            </form>
            <br />
            <button
              onClick={this.loginClick}
              className='btn btn-primary center_button'
            >
              Log in
            </button>
          </div>
          <div id='register' className='tab-pane fade'>
            <Signup />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    username: state.username,
    loginState: state.loginState,
  };
};
export default connect(mapStateToProps)(Sign_in);
