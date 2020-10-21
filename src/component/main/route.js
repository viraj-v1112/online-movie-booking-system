import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
//Sigin Import
import Sign_in from "./signIn";
import ForgotPassword from "./sub/forgot_password";
import ChangeForgotPassword from "./sub/change_forgot_password";
import ChangeNewPassword from "./sub/change_new_password";
//Movie Related Imports
import Movie from "./movie/movie";
import Movie_info from "./movie/sub_movie/movieInfo";
import BookingMovie from "./booking/bookingMovie";
import Slot from "./movie/slot";
import Search from './search'

//Theater Related imports
import Theater from './theater/theater'
import Theater_info from './theater/theaterInfo'

import User from "./user";
import Payment from './payment'
import DisplayPage from './DisplayPage'
import { connect } from "react-redux";


class Routerr extends Component {
  
  render() {
    return (
      <div>
        <Route exact path='/' component={Sign_in} />
        <PrivateRoute
          loginState={this.props.loginState}
          path='/user'
          component={User}
        />
    
        <Route path='/forgot_pass' component={ForgotPassword} />
        <Route path='/api/users/reset/' component={ChangeForgotPassword} />
        <PrivateRoute
          loginState={this.props.loginState}
          path='/movie' 
          component={Movie}
        />
        <PrivateRoute
          loginState={this.props.loginState}
          path='/movie_info' 
          component={Movie_info}
        />
        <PrivateRoute
          loginState={this.props.loginState}
          path='/booking_movie' 
          component={BookingMovie}
        />
        <PrivateRoute
          loginState={this.props.loginState}
          path='/slot'
          component={Slot}
        />
        <PrivateRoute
          loginState={this.props.loginState}
          path='/new_pass'
          component={ChangeNewPassword}
        />
        <PrivateRoute
          loginState={this.props.loginState}
          path='/theater'
          component={Theater}
        />
        <PrivateRoute
          loginState={this.props.loginState}
          path='/theater_info'
          component={Theater_info}
        />
        <PrivateRoute
          loginState={this.props.loginState}
          path='/search'
          component={Search}
        />
        <PrivateRoute
          loginState={this.props.loginState}
          path='/payment'
          component={Payment}
        />
        <PrivateRoute
          loginState={this.props.loginState}
          path='/ticket'
          component={DisplayPage}
        />
        {/* <Route path='/ticket' component={DisplayPage} /> */}
      </div>
    );
  }
}

function PrivateRoute({ component: Component, loginState, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        loginState === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    loginState: state.loginState,
  };
};
export default connect(mapStateToProps, null, null, {
  pure: false,
})(Routerr);
