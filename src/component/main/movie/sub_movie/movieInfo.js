import React, { Component } from "react";
import MovieTrailer from "./movie_video/movieTrailer";
import { Link } from "react-router-dom";
import axios from "axios";
import URL from "../../../../URL_config";
import BasicTable from "./movieTable";
class MovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieTitle: null,
      summ: null,
      category: null,
      cast: null,
      director: null,
      duration: null,
      trailer: null,
      price: null,
      id_index: null,
      popularity_index: null,
      language: null,
    };
  }

  componentDidMount() {
    var token = localStorage.getItem("Token");
    axios({
      method: "get",
      url: URL + "movie/api/" + this.props.location.state.id_index + "/",
      headers: {
        Authorization: "Token " + token,
      },
    }).then((res) => {
      console.log(res.data);
      this.setState({
        cast: res.data.cast,
        certification: res.data.certificate,
        director: res.data.director,
        imagePath: "http://localhost:8000" + res.data.image,
        language: res.data.language,
        movieTitle: res.data.name,
        popularity_index: res.data.popularity_index,
        duration: res.data.run_length,
        trailer: res.data.trailer,

        summ: res.data.summ,
        category: res.data.category,
        price: res.data.price,
        id_index: res.data.id_index,
      });
      console.log(this.state);
    });
  }
  bookingClick = (e) => {
    e.preventDefault();
    localStorage.setItem("film", this.state.id_index);
    localStorage.setItem("filmName", this.state.movieTitle);
    localStorage.setItem("price", this.state.price);
    this.props.history.push({
      pathname: "/booking_movie",
      state: {
        id_index: this.state.id_index,
        vTitle: this.state.vTitle,
        price: this.state.price,
      },
    });
  };

  render() {
    //console.log(this.state);
    return (
      <div>
        <div id='features' className='text-center '>
          <div className='container title_movie mg-left-10'>
            <h3 className='mg-0 btn active'>
                MOVIE INFORMATION
            </h3>
          </div>
          <div className='container fea-container'>
            <div className='row'>
              <div className='col-sm-3 fea-img'>
                <img src={this.state.imagePath} width='100%' alt={this.state.movieTitle}/>
                <div className='fea-fade'>
                  <button
                    type='button'
                    className='fea-fade-play'
                    data-toggle='modal'
                    data-target='#myModal'
                  >
                    <i className='fa fa-play-circle-o' />
                  </button>
                </div>
              </div>
              <div className='col-sm-offset-1 col-sm-6 mg-top-25 text-left'>
                <BasicTable data = {this.state}/>
              </div>
            </div>
          </div>
          <div className='container fea-container'>
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
        <MovieTrailer trailer={this.state.trailer} />
      </div>
    );
  }
}

export default MovieInfo;
