import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className='container text-left footer-container'>
            <div className='row'>
              <div className='col-sm-3 footer-left'>
                
                <a // eslint-disable-next-line
                className='na-brand' >
                  <img
                    src='/img/index_icon_range.png'
                    width='50%'
                    alt={"none"}
                  />
                </a>
              </div>
              <div className='col-sm-3 footer-center-content'>
                <h5 className='footer-text-head'>Information</h5>
                <p className='text-white'>Online Movie booking System</p>
              </div>
              <div className='col-sm-3 footer-center-link'>
                <h5 className='footer-text-head'>Extend</h5>
                <div className='footer-center-link-div-first'>
                  <a className='footer-link-a' href='https://www.youtube.com'>
                    Youtube
                  </a>
                </div>
                <div className='footer-center-link-div-second'>
                  <a
                    className='footer-link-a'
                    href='https://www.facebook.com/'
                  >
                    Facebook
                  </a>
                </div>
              </div>
              <div className='col-sm-3 col-xs-12 footer-right'>
                <p className='footer-right-top'>
                  We have one <i className='fa fa-heart-o' />{" "}
                  <span style={{ color: "orange" }}>warm</span>, always waiting
                  for you
                </p>
                <p className='copyright'> © Shubham Shetty , Ritik Singh , Viraj Shah </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
