import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class MovieDetailSub extends Component {
  infoClick = (e) => {
    e.preventDefault();
    console.log(this.props.id_index);
    this.props.history.push({
      pathname: "/movie_info/" + this.props.id_index,
      state: { id_index: this.props.id_index },
    });
  };
  bookingClick = (e) => {
    e.preventDefault();
    localStorage.setItem("movieId", this.props.id_index);
    localStorage.setItem("movieName", this.props.movieTitle);
    localStorage.setItem("price", this.props.Price);
    this.props.history.push({
      pathname: "/booking_movie",
      state: {
        id_index: this.props.id_index,
        movieTitle: this.props.movieTitle,
        price: this.props.Price,
      },
    });
  };
  render() {
    return (
      <div className='col-sm-3 fea-img'>
        <img src={this.props.Img} width='100%' alt="image"/>
        <div className='fea-fade'>
          <div className='fea-fade-text fix-fea-fade-text'>
            <hr className='hr-color-orange' />
            <p className='text-center'>
              <Link
                to=''
                onClick={this.infoClick}
                refs='id_number'
                className='fea-fade-button f-left'
              >
                DETAIL
              </Link>

              <Link
                value={this.props.Price}
                onClick={this.bookingClick}
                to=''
                className='fea-fade-button f-right'
              >
                BOOKING TICKETS
              </Link>
            </p>
          </div>
        </div>
        <div className='fea-img-text-bottom'>
          <p>{this.props.movieTitle}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(MovieDetailSub);
