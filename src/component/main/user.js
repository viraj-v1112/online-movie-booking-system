import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: "../../../public/img/index_icon.png",
      username: "",
    };
  }

  render() {
    return (
      <div className='container'>
        <div>
          <h3>User information</h3>
          <br />
          <div
            className='row whiteframe'
            style={{ paddingTop: "30px", paddingBottom: "50px" }}
          >
            <div className='center-block'>
              <br />
              {/* <div className="center_button">
                                <label id="#bb" className="avtbutton profilebutton">Đổi ảnh đại diện
                                
                                    <input type="file" id="File" className="hideinput" size={60} />
                                </label>
                            </div> */}
            </div>

            <hr />
            <div className='col-md-6 profilecol1'>
              <div>
                <div>
                  <h4>Surname</h4>
                  <p name='firstname' className='profiletext' id='firstname'>
                    {this.props.firstname}{" "}
                  </p>
                </div>
              </div>
              <hr />
              <div>
                <div>
                  <h4>Name</h4>
                  <p className='profiletext' id='lastname'>
                    {this.props.lastname}
                  </p>
                </div>
              </div>
              <hr />
              <div>
                <div>
                  <h4>Username</h4>
                  <p name='username' className='profiletext' id='username'>
                    {this.props.username}
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 profilecol1'>
              <div>
                <div>
                  <h4>Email</h4>
                  <p name='email' className='profiletext' id='email'>
                    {this.props.email}
                  </p>
                </div>
              </div>
              <hr />
              <div>
                <div>
                  <h4>Date of birth</h4>
                  <p
                    name='dateOfBirth'
                    className='profiletext'
                    id='dateOfBirth'
                  >
                    {this.props.dateOfBirth}
                  </p>
                </div>
              </div>
              <hr />
              <div>
                <div>
                  <h4>phone number</h4>
                  <p name='phone' className='profiletext' id='phone'>
                    {this.props.phone}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div>
                <Link
                  to='/new_pass'
                  id='chanePass'
                  className='btn btn-primary buttonstyle'
                >
                  Change Password
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    username: state.username,
    email: state.email,
    firstname: state.firstname,
    lastname: state.lastname,
    phone: state.phone,
    dateOfBirth: state.dateOfBirth,
    loginState: state.loginState,
    avatar: state.avatar,
  };
};
export default connect(mapStateToProps)(User);
