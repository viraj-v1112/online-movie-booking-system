import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import URL from "../../../URL_config";

class Theater_info extends Component {
  constructor(props) {
    super(props);
    this.state = {
    name: null,
    city: null,
    address: null,
    no_of_screen: null,
    id_index: null,
    showList: [],
    };
  }

  componentDidMount() {
    var token = localStorage.getItem("Token");
    axios({
      method: "get",
      url: URL + "theater/api/" + this.props.location.state.id_index + "/",
      headers: {
        Authorization: "Token " + token,
      },
    }).then((res) => {
      this.setState({
        name: res.data.name,
        city: res.data.city,
        address: res.data.address,
        no_of_screen: res.data.no_of_screen,
        id_index: res.data.id_index,
      });
      localStorage.setItem("TheaterName" , res.data.name);
      localStorage.setItem("TheaterID" , this.props.location.state.id_index);
    });
  }
  bookingClick = (e) => {
    e.preventDefault();
    var token = localStorage.getItem("Token");
    axios({
      method: "get",
      url: URL + "theater/api/" + this.props.location.state.id_index + "/shows/",
      headers: {
        Authorization: "Token " + token,
      },
    }).then((res) => {
      this.setState({ showList: [...this.state.showList, ...res.data] });
    });
    setTimeout(() => {
      this.props.history.push({
        pathname: "/booking_movie",
        state: {
          id_index: this.props.location.state.id_index,
          showList: this.state.showList,
        },
      });
    }, 3000);
  };

  render() {
    return (
      <div>
        <div id='features' className='text-center '>
          <div className='container title_movie mg-left-10'>
            <h3 className='mg-0'>
                Theater Details      
            </h3>
          </div>
          <div className='container fea-container'>
            <div className='row'>
              <div className='col-sm-3 fea-img'>
                <img src='../../../../../../img/img_cinema/cinema.png' width='100%' alt={this.state.name}/>
              </div>
              <div className='col-sm-offset-1 col-sm-6 mg-top-25 text-left'>
                <h3 className='spainBold'> {this.state.name}</h3>
                <h4>
                  <span className='spainBold'>City:</span>{" "}
                  {this.state.city}
                </h4>
                <h4>
                  <span className='spainBold'>Screens:</span> {this.state.no_of_screen}
                </h4>
                
              </div>
            </div>
          </div>
          <div className='container fea-container'>
            <h4 className='text-left'>
              <span className='spainBold'>Address :</span> {this.state.address}
            </h4>

            <Link
              onClick={this.bookingClick}
              className='btn slot-button-final center-block'
              role='button'
              to=''
            >
              BOOKING TICKETS
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Theater_info;
