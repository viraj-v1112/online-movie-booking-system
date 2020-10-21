import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import Routerr from "./component/main/route";
import axios from "axios";
import { connect } from "react-redux";
import URL from "./URL_config";
class App extends Component {
  componentDidMount() {
    if (localStorage.getItem("Token") != null) {
      var token = localStorage.getItem("Token");
      axios({
        method: "get",
        url: URL + "login/",
        headers: {
          Authorization: "Token " + token,
        },
      })
        .then((response) => {
          this.props.dispatch({
            type: "LOG_IN",
            username: response.config.username,
            loginState: !this.props.loginState,
          });
          console.log(this.props.loginState);
        })
        .catch((response) => {
          console.log("Get information Error " + response);
        });
    }
  }

  render() {
    return (
      <Router>
        <div className='App'>
          {this.props.loginState ? (
            <Header Username={this.props.username} Show='' Hidden='hidden' />
          ) : (
            <Header Show='hidden' />
          )}
          <Routerr loginState={this.props.loginState} />
          <Footer />
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    loginState: state.loginState,
    username: state.username,
  };
};
export default connect(mapStateToProps)(App);
