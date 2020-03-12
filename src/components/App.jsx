import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  addReminder() {
    console.log("this.state", this.state);
  }

  render() {
    return (
      <div className="App">
        <div className="title">Reminder PRO!</div>

        <div className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to.."
              onChange={event => this.setState({ text: event.target.value })}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addReminder()}
          >
            Add reminder
          </button>
        </div>
      </div>
    );
  }
}

export default App;
