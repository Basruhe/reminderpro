import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { addReminder, deleteReminder } from "../actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      dueDate: "",
    };
  }

  // to do: add error handling to erroneous or empty dates.
  // to do: display date when adding reminders
  addReminder() {
    console.log("this.state.dueDate contains: ", this.state.dueDate);
    console.log("this (which is the props object)", this);
    this.props.addReminder(this.state.text, this.state.dueDate);
  }

  deleteReminder(id) {
    console.log("deleting in application", id);
    console.log("this.props", this.props);
    this.props.deleteReminder(id);
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
        {reminders.map((reminder) => {
          return (
            <li key={reminder.id} className="list-group-item">
              <div className="list-item">{reminder.text}</div>
              <div
                className="list-item delete-button"
                onClick={() => this.deleteReminder(reminder.id)}
              >
                &#x2715;
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    // console.log("this.props", this.props);
    return (
      <div className="App">
        <div className="title">Reminder PRO!</div>

        <div className="form-inline reminder-form">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to.."
              onChange={(event) => this.setState({ text: event.target.value })}
            />
            <input
              className="form-control"
              placeholder="by..."
              type="datetime-local"
              onChange={(event) =>
                this.setState({ dueDate: event.target.value })
              }
            ></input>
          </div>

          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addReminder()}
          >
            Add reminder
          </button>
        </div>
        {this.renderReminders()}
      </div>
    );
  }
}

// Now, we need to mapstatetoprops so that we can update the redux state with our action and recognize it in our UI.
function mapStateToProps(state) {
  console.log("state", state);
  return {
    reminders: state,
  };
}

// This is now redundant, since addreminder is also added to the export default connect. This is a shortcut. Otherwise you'd need to write an actual mapdispatchtoprops like below, and import bindactioncreators as well
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ addReminder }, dispatch);
// }

export default connect(mapStateToProps, { addReminder, deleteReminder })(App);
