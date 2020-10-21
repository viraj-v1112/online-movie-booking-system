import React, { Component } from "react";
import { Link } from "react-router-dom";
import Movie_home from "../movie/movieDetailSub";
import Theater_Detail_Sub from './theaterInfoSub'
import axios from "axios";
import URL from "../../../URL_config";

class Theater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theaterList: [],
      image: '../../../../../../img/img_cinema/cinema.png',
      price : 100,
    };
  }

  componentDidMount() {
    var token = localStorage.getItem("Token");
    axios({
      method: "get",
      url: URL + "theater/api/",
      headers: {
        Authorization: "Token " + token,
      },
    }).then((res) => {
      this.setState({ theaterList: [...this.state.theaterList, ...res.data] });
      localStorage.setItem("Price" , this.state.price);
    });
  }

  render() {
    return (
      <div>
        <div id='features' className='text-center '>
          <div className='container fea-container'>
            <div className='row'>
              {this.state.theaterList.map((i) => {
                return (
                  <Theater_Detail_Sub
                    key={i.id}
                    Price={this.state.price}
                    Img={this.state.image}
                    id_index={i.id}
                    theaterName={i.name}
                  />
                );
              })}
              Theater Page
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Theater;
