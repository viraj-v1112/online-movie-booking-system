import React , {Component } from 'react'
import { connect  } from 'react-redux'
import axios from 'axios'
import URL from '../../URL_config'
import MovieDetailSub from './movie/movieDetailSub'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
          query: "",
          queryList: [],
        };
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(e) {
          this.setState({ query: e.target.value });
      }
      searchClick = (e) => {
        e.preventDefault();
        var token = localStorage.getItem("Token");
        console.log(this.state.query)
        axios({
            method: "post",
            url: URL + "movie/search/api/",
            headers: {
                Authorization: "Token " + token,
                "Content-Type": "application/json",
            },
            data: {
                "query": this.state.query,
            }
        }).then((res) => {
            var dispatch = this.props.dispatch;
            dispatch({
                type: "SEARCH",
                query: this.state.query,
            });
            this.props.history.push({
                pathname: "/search",
            });
            this.setState({ searchList: res.data });
            console.log(this.state.searchList);
        })
        .catch((response) => {
            console.log(response);
            this.props.history.push({
                pathname: "/search",
            });
            if (String(response) === "Error: Network Error")
            alert("No Internet connection available");
            else alert("Username or password is incorrect");
        });
      }
    render() {
        return(
            <div>
                <form className='navbar-form' style={{marginTop:"3rem"}}>
                    <div className='input-group'>
                       <input
                         type='text'
                         className='form-control'
                         placeholder='Search'
                         onChange={this.handleChange}
                         value={this.state.query}
                       />
                        <div className='input-group-btn'>
                            <button className='btn btn-default' onClick={this.searchClick}>
                                <i className='fa fa-search' />
                            </button>
                        </div>
                    </div>
                </form>
                {this.state.searchList ? (
                    <>
                    <h3>The Results for "{this.state.query}" are:</h3> 
                    <div id='features' className='text-center '>
                        <div className='container fea-container'>
                            <div className='row'>
                                {this.state.searchList.map((i) => {
                                    return (
                                        <MovieDetailSub
                                            key={i.id}
                                            Price={i.price}
                                            Img={"http://localhost:8000" + i.image}
                                            id_index={i.id}
                                            movieTitle={i.name}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                  </>
                ) 
                : ""}
            </div>
        )
    }
}

export default connect()(Search)