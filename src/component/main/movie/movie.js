import React, { Component } from "react";
import MovieTrailer from "./sub_movie/movie_video/movieTrailer";
import MovieDetailSub from "./movieDetailSub";
import axios from "axios";
import URL from "../../../URL_config";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmList: [],
      price: 100,
    };
  }

  componentDidMount() {
    var token = localStorage.getItem("Token");
    axios({
      method: "get",
      url: URL + "movie/api/",
      headers: {
        Authorization: "Token " + token,
      },
    }).then((res) => {
      this.setState({ filmList: [...this.state.filmList, ...res.data] });
      //console.log(this.state.filmList);
    });
  }

  render() {
    return (
      <div>
        <div id='features' className='text-center '>
          <div className='container fea-container'>
            <div className='row'>
              {this.state.filmList.map((i) => {
                return (
                  <MovieDetailSub
                    key={i.id}
                    Price={this.state.price}
                    Img={"http://localhost:8000" + i.image}
                    id_index={i.id}
                    movieTitle={i.name}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className='modal fade' id='myModal' role='dialog'>
          <MovieTrailer />
        </div>
      </div>
    );
  }
}

export default Movie;
