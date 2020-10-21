import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
class BookingMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_index: 1,
      item: {
        date: null,
        time: null,
        theater: null,
        day: null,
      },
    };
  }

  dateClick = (e, date , day) => {
    this.setState((prevState) => ({
      item: {
        ...prevState.item,
        date: date,
        day: day,
      },
    }));
  };
  timeClick = (e, time) => {
    this.setState((prevState) => ({
      item: {
        ...prevState.item,
        time: time,
      },
    }));
  };
  cinemaClick = (e, theater) => {
    this.setState((prevState) => ({
      item: {
        ...prevState.item,
        theater,
      },
    }));
  };

  componentWillMount() {
    {
      this.setState((prevState) => ({
        item: {
          ...prevState.item,
        },
      }));
    }
  }

  bookingClick = (e) => {
    if(localStorage.getItem("ShowID") === 1){
      localStorage.setItem("ShowID" , 2);
    } else {
      localStorage.setItem("ShowID" , 1);
    }
    e.preventDefault();
    // localStorage.setItem("item", JSON.stringify(this.state.item));
    localStorage.setItem("Movie" , this.state.item.theater)
    localStorage.setItem("Date" , this.state.item.date)
    localStorage.setItem("Time" , this.state.item.time)
    localStorage.setItem("Day" , this.state.item.day)
    this.props.history.push({
      pathname: "/slot",
      state: {
        index: this.state.id_index,
      }
    });
  };

  getDayName = (x) => {
    var day = "";
    switch (x) {
      case 1:
        day = "Mon";
        break;
      case 2:
        day = "Tue";
        break;
      case 3:
        day = "Wed";
        break;
      case 4:
        day = "Thu";
        break;
      case 5:
        day = "Fri";
        break;
      case 6:
        day = "Sat";
        break;
      case 7:
        day = "Sun";
        break;
      default:
        break;
    }
    return day;
  };
  getDay = (x) => {
    var t = moment().add(x, "days").isoWeekday();
    return this.getDayName(t);
  }; 
  getDM = (x) => {
    return moment().add(x, "days").format("DD/MM");
  }; 
  getDMY = (x) => {
    return moment().add(x, "days").format().slice(0, 10);
  }; 
  getY = (x) => {
    return moment().add(x, "days").year();
  };   
  render() {
    return (
      <div className="container">
        <div className="modal-header">
          <div>
            <ul className="nav nav-tabs">
              <li className="active">
                <a
                  className="tab-item"
                  href="#1"
                  data-toggle="tab"
                  onClick={(e) => this.dateClick(e, this.getDMY(0) , this.getDay(0))}
                >
                  <span className="f-left tab-day">{this.getDay(0)}</span>{" "}
                  {this.getDM(0)} <br />
                  {this.getY(0)}
                </a>
              </li>
              <li>
                <a
                  className="tab-item"
                  href="#2"
                  data-toggle="tab"
                  onClick={(e) => this.dateClick(e, this.getDMY(1) , this.getDay(1))}
                >
                  <span className="f-left tab-day">{this.getDay(1)}</span>{" "}
                  {this.getDM(1)} <br />
                  {this.getY(1)}
                </a>
              </li>
              <li>
                <a
                  className="tab-item"
                  href="#3"
                  data-toggle="tab"
                  onClick={(e) => this.dateClick(e, this.getDMY(2) , this.getDay(2))}
                >
                  <span className="f-left tab-day">{this.getDay(2)}</span>{" "}
                  {this.getDM(2)} <br />
                  {this.getY(2)}
                </a>
              </li>
              <li>
                <a
                  className="tab-item"
                  href="#1"
                  data-toggle="tab"
                  onClick={(e) => this.dateClick(e, this.getDMY(3) , this.getDay(3))}
                >
                  <span className="f-left tab-day">{this.getDay(3)}</span>{" "}
                  {this.getDM(3)} <br />
                  {this.getY(3)}
                </a>
              </li>
              <li>
                <a
                  className="tab-item"
                  href="#2"
                  data-toggle="tab"
                  onClick={(e) => this.dateClick(e, this.getDMY(4) , this.getDay(4))}
                >
                  <span className="f-left tab-day">{this.getDay(4)}</span>{" "}
                  {this.getDM(4)} <br />
                  {this.getY(4)}
                </a>
              </li>
              <li>
                <a
                  className="tab-item"
                  href="#3"
                  data-toggle="tab"
                  onClick={(e) => this.dateClick(e, this.getDMY(5) , this.getDay(5))}
                >
                  <span className="f-left tab-day">{this.getDay(5)}</span>{" "}
                  {this.getDM(5)} <br />
                  {this.getY(5)}
                </a>
              </li>
              <li>
                <a
                  className="tab-item"
                  href="#1"
                  data-toggle="tab"
                  onClick={(e) => this.dateClick(e, this.getDMY(6) , this.getDay(6))}
                >
                  <span className="f-left tab-day">{this.getDay(6)}</span>{" "}
                  {this.getDM(6)} <br />
                  {this.getY(6)}
                </a>
              </li>
              <li>
                <a
                  className="tab-item"
                  href="#2"
                  data-toggle="tab"
                  onClick={(e) => this.dateClick(e, this.getDMY(7) , this.getDay(7))}
                >
                  <span className="f-left tab-day">{this.getDay(7)}</span>{" "}
                  {this.getDM(7)} <br />
                  {this.getY(7)}
                </a>
              </li>
            </ul>

            <div className="tab-content ">
              <div className="tab-pane active" id="1">
                <div className="mg-top-20">
                  <ul className="nav nav-tabs tab-fix">
                    <li className="tab-item-in">
                      <a
                        href="#tab_in1_1"
                        ref="theater1"
                        data-toggle="tab"
                        onClick={(e) =>
                          this.cinemaClick(e, this.refs.theater1.text)
                        }
                      >
                        AndhaDhun
                      </a>
                    </li>
                    <li className="tab-item-in">
                      <a
                        href="#tab_in1_2"
                        ref="theater2"
                        data-toggle="tab"
                        onClick={(e) =>
                          this.cinemaClick(e, this.refs.theater2.text)
                        }
                      >
                        Kabir Singh
                      </a>
                    </li>
                    <li className="tab-item-in">
                      <a
                        href="#tab_in1_1"
                        ref="theater3"
                        data-toggle="tab"
                        onClick={(e) =>
                          this.cinemaClick(e, this.refs.theater3.text)
                        }
                      >
                        The Dark Knight
                      </a>
                    </li>
                    <li className="tab-item-in">
                      <a
                        href="#tab_in1_1"
                        ref="theater4"
                        data-toggle="tab"
                        onClick={(e) =>
                          this.cinemaClick(e, this.refs.theater4.text)
                        }
                      >
                        Ratatouille
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div className="tab-pane active" id="tab_in1_1">
                      <div className=" mg-top-20">
                        <hr />
                        <ul className="nav nav-tabs tab-fix">
                          <li className="tab-item-in">
                            <a
                              ref="time1"
                              href="#tab_continues"
                              onClick={(e) =>
                                this.timeClick(e, this.refs.time1.text)
                              }
                            >
                              17:00
                            </a>
                          </li>
                          <li className="tab-item-in">
                            <a
                              ref="time2"
                              href="#tab_continues"
                              onClick={(e) =>
                                this.timeClick(e, this.refs.time2.text)
                              }
                            >
                              19:30
                            </a>
                          </li>
                          <li className="tab-item-in">
                            <a
                              ref="time3"
                              href="#tab_continues"
                              onClick={(e) =>
                                this.timeClick(e, this.refs.time3.text)
                              }
                            >
                              21:30
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-pane" id="tab_in1_2">
                      <div className=" mg-top-20">
                        <hr />
                        <ul className="nav nav-tabs tab-fix">
                          <li className="tab-item-in">
                            <a
                              ref="time1"
                              href="#tab_continues"
                              onClick={(e) =>
                                this.timeClick(e, this.refs.time1.text)
                              }
                            >
                              17:00
                            </a>
                          </li>
                          <li className="tab-item-in">
                            <a
                              ref="time2"
                              href="#tab_continues"
                              onClick={(e) =>
                                this.timeClick(e, this.refs.time2.text)
                              }
                            >
                              19:30
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
              <div className="tab-pane" id="2">
                <div className="mg-top-20">
                  <ul className="nav nav-tabs tab-fix">
                    <li className="tab-item-in">
                      <a
                        href="#tab_in1_1"
                        ref="theater1"
                        data-toggle="tab"
                        onClick={(e) =>
                          this.cinemaClick(e, this.refs.theater1.text)
                        }
                      >
                        Kabir Singh
                      </a>
                    </li>
                    <li className="tab-item-in">
                      <a
                        href="#tab_in1_2"
                        ref="theater2"
                        data-toggle="tab"
                        onClick={(e) =>
                          this.cinemaClick(e, this.refs.theater2.text)
                        }
                      >
                        Ratatouille
                      </a>
                    </li>
                    <li className="tab-item-in">
                      <a
                        href="#tab_in1_1"
                        ref="theater3"
                        data-toggle="tab"
                        onClick={(e) =>
                          this.cinemaClick(e, this.refs.theater3.text)
                        }
                      >
                        The Dark Knight
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div className="tab-pane active" id="tab_in1_1">
                      <div className=" mg-top-20">
                        <hr />
                        <ul className="nav nav-tabs tab-fix">
                          <li className="tab-item-in">
                            <a
                              ref="time1"
                              href="#tab_continues"
                              onClick={(e) =>
                                this.timeClick(e, this.refs.time1.text)
                              }
                            >
                              17:00
                            </a>
                          </li>
                          <li className="tab-item-in">
                            <a
                              ref="time2"
                              href="#tab_continues"
                              onClick={(e) =>
                                this.timeClick(e, this.refs.time2.text)
                              }
                            >
                              19:30
                            </a>
                          </li>
                          <li className="tab-item-in">
                            <a
                              ref="time3"
                              href="#tab_continues"
                              onClick={(e) =>
                                this.timeClick(e, this.refs.time3.text)
                              }
                            >
                              21:30
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-pane" id="tab_in1_2">
                      <div className=" mg-top-20">
                        <hr />
                        <ul className="nav nav-tabs tab-fix">
                          <li className="tab-item-in">
                            <a
                              ref="time1"
                              href="#tab_continues"
                              onClick={(e) =>
                                this.timeClick(e, this.refs.time1.text)
                              }
                            >
                              17:00
                            </a>
                          </li>
                          <li className="tab-item-in">
                            <a
                              ref="time2"
                              href="#tab_continues"
                              onClick={(e) =>
                                this.timeClick(e, this.refs.time2.text)
                              }
                            >
                              19:30
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane" id="3">
                <div className=" mg-top-20">
                  <ul className="nav nav-tabs tab-fix">
                    <li className="tab-item-in">
                      <a
                        ref="theater1"
                        href="#tab_in_1"
                        data-toggle="tab"
                        onClick={(e) =>
                          this.cinemaClick(e, this.refs.theater1.text)
                        }
                      >
                        AndhaDhun
                      </a>
                    </li>
                    <li className="tab-item-in">
                      <a
                        ref="theater2"
                        href="#tab_in_2"
                        ref="theater3"
                        data-toggle="tab"
                        onClick={(e) =>
                          this.cinemaClick(e, this.refs.theater2.text)
                        }
                      >
                        The Dark Knight
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div className="tab-pane active" id="tab_in_1">
                      <div className=" mg-top-20">
                        <hr />
                        <ul className="nav nav-tabs tab-fix">
                          <li className="tab-item-in">
                            <a
                              ref="time1"
                              href="#tab_continues"
                              onClick={(e) =>
                                this.timeClick(e, this.refs.time1.text)
                              }
                            >
                              17:00
                            </a>
                          </li>
                          <li className="tab-item-in">
                            <a
                              ref="time2"
                              href="#tab_continues"
                              onClick={(e) =>
                                this.timeClick(e, this.refs.time2.text)
                              }
                            >
                              21:30
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-pane" id="tab_in_2">
                      <div className=" mg-top-20">
                        <hr />
                        <ul className="nav nav-tabs tab-fix">
                          <li className="tab-item-in">
                            <a
                              ref="time1"
                              href="#tab_continues"
                              onClick={(e) =>
                                this.timeClick(e, this.refs.time1.text)
                              }
                            >
                              17:00
                            </a>
                          </li>
                          <li className="tab-item-in">
                            <a
                              ref="time2"
                              href="#tab_continues"
                              onClick={(e) =>
                                this.timeClick(e, this.refs.time2.text)
                              }
                            >
                              19:30
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mg-top-20">
            <Link
              onClick={this.bookingClick}
              className="btn tab-button-dropdown"
              role="button"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(BookingMovie);
