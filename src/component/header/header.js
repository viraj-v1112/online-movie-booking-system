import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  componentWillReceiveProps() {}
  render() {
    return (
      <div>
        <header>
          <div className='container-fluid bg-gray'>
            {this.props.loginState ? (
              <Link className='na-brand' to='/movie'>
                <img
                  src='/img/index_icon_range.png'
                  alt={"icon_web"}
                  height='90rem'
                  align='left'
                />
              </Link>
            ) : (
              <Link className='na-brand' to='/'>
                <img
                  src='/img/index_icon_range.png'
                  alt={"icon_web"}
                  height='90rem'
                  align='left'
                />
              </Link>
            )}
            <div className='navbar-right mg-top-20'>
              <p className={this.props.Show}>
                <Link to='/user'>{this.props.Username} </Link>
                <button
                  className='na-sign-in'
                  onClick={() => {
                    this.props.dispatch({
                      type: "LOG_OUT",
                      loginState: false,
                    });
                    localStorage.removeItem("Token");
                    localStorage.removeItem("bookingList");
                    this.props.history.push({
                      pathname: "/",
                      state: { state: this.props.state },
                    });
                  }}
                >
                  <Link to='/'>
                    <i className='fa fa-sign-out' />
                    LOG OUT
                  </Link>
                </button>
              </p>
              <Link className={"na-sign-in " + this.props.Hidden} to='/'>
                <i className='fa fa-user' /> LOG IN
              </Link>
            </div>
          </div>
          {this.props.loginState ? (
            <nav className='navbar navbar-default na '>
              <div className='container'>
                <div className='row  '>
                  <div className='navbar-header'>
                    <button
                      type='button'
                      className='navbar-toggle na-toggle'
                      data-toggle='collapse'
                      data-target='#myNavbar'
                    >
                      <span className='icon-bar' />
                      <span className='icon-bar' />
                      <span className='icon-bar' />
                    </button>
                  </div>
                  <div
                    className='collapse navbar-collapse na-right'
                    id='myNavbar'
                  >
                    <ul className='nav navbar-nav'>
                      <li>
                        <Link className='na-item' to='/movie'>
                          Movies
                        </Link>
                      </li>
                      <li>
                        <Link className='na-item' to='/theater'>
                          Theaters
                        </Link>
                      </li>
                      <li>
                        <Link className='na-item' to='/user'>
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link className='na-item' to='/search'>
                          Search
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          ) : (
            ""
          )}
        </header>
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
export default withRouter(connect(mapStateToProps)(Header));
