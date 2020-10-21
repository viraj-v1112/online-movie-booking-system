import React, { Component } from 'react'
import axios from 'axios'
import URL from '../../URL_config'

class Payment extends Component {
    constructor(props){
        super()
        this.state = { 
            paymentMode : "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({paymentMode: event.target.value});
      }
    
    handleSubmit(event) {
        var token = localStorage.getItem("Token");
        var theaterId = localStorage.getItem("TheaterID");
        var showid = localStorage.getItem("ShowID");
        var seat  = localStorage.getItem("seatID");
        var seat_row = seat.charAt(0);
        var seat_col = seat.substring(1);
        axios({
            method: "POST",
            url: URL + "theater/api/" + theaterId + "/shows/" + showid + "/booking/",
            headers: {
                Authorization: "Token " + token,
                "Content-Type": "application/json",
            },
            data: {
                "payment_type" : this.state.paymentMode,
                "paid_amount" : localStorage.getItem("Price"),
                "paid_by" : localStorage.getItem("Username"),
                "seat_no" : seat,
                "seat_id" : seat_col,
                "seat_code" : seat,
                "seat_row" : seat_row,
                "show_id" : showid,
            }
        }).then((res) => {
            this.props.history.push({
                pathname: "/ticket",
              });
            console.log(res)
        })
        console.log(localStorage)
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <div style={{ textAlign: "center" }}>
                    <h3>Select Payment Method</h3>
                    <br />
                    <form onSubmit={this.handleSubmit}>
                        <select value={this.state.value} onChange={this.handleChange} style={{ textAlign: "center" }}>
                            <option selected disabled hidden>
                                Choose here
                            </option>
                            <option value="Credit Card">Credit Card</option>
                            <option value="Debit Card">Debit Card</option>
                            <option value="Net Banking">Net Banking</option>
                            <option value="Wallet">Wallet</option>
                        </select>
                    </form>
                    <br/>
                        <h2>Amount : Rs.{localStorage.getItem("Price")}</h2>
                    <br />
                </div>
                <div >
                    <button
                        onClick={this.handleSubmit}
                        id="contact_form_submit"
                        className="btn btn-primary"
                        value="Submit"
                    >
                        Pay
                    </button>
                </div>
                
            </div>
        )
    }
}
export default Payment;