import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addReminder } from "../actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  addReminder() {
    this.props.addReminder(this.state.text);
  }

  // renderReminders() {
  //   const { reminders } = this.props;
  //   // this is not working; as nothing is (somehow) ever added to the reminders in the reducers index.js
  //   console.log("reminders as state:", reminders);
  //   return (
  //     <ul className="list-group col-sm-4">
  //       {reminders.map(reminder => {
  //         return (
  //           <li key={reminder.id} className="list-group-item">
  //             <div>{reminder.text}</div>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   );
  // }

  render() {
    return (
      <div className="App">
        <div className="title">Reminder PRO!</div>

        <div className="form-inline reminder-form">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to.."
              onChange={event => this.setState({ text: event.target.value })}
            />
          </div>
          {/* {this.renderReminders()} */}
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

function mapStateToProps(state) {
  console.log("state", state);
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addReminder }, dispatch);
}

export default connect(mapStateToProps, { addReminder })(App);
