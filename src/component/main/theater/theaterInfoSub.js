import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Theater_Detail_Sub extends Component {
  infoClick = (e) => {
    e.preventDefault();
    this.props.history.push({
      pathname: "/theater_info/" + this.props.id_index,
      state: { id_index: this.props.id_index },
    });
  };
  render() {
    return (
      <div className='col-sm-3 fea-img'>
        <img src={this.props.Img} width='100%' />
        <div className='fea-fade'>
          <div className='fea-fade-text fix-fea-fade-text'>
            <hr className='hr-color-orange' />
            <p className='text-center'>
             <Link
                to=''
                onClick={this.infoClick}
                refs='id_number'
                className='fea-fade-button f-center'
              >
                DETAILS
              </Link>
            </p>
          </div>
        </div>
        <div className='fea-img-text-bottom'>
          <p>{this.props.theaterName}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Theater_Detail_Sub);
