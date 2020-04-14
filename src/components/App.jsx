import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { addReminder } from "../actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  addReminder() {
    console.log("this (which is the props object)", this);
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
  //

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

// Now, we need to mapstatetoprops so that we can update the redux state with our action and recognize it in our UI.
// function mapStateToProps(state) {
//   console.log("state", state);
// }

// This is now redundant, since addreminder is also added to the export default connect. This is a shortcut. Otherwise you'd need to write an actual mapdispatchtoprops like below, and import bindactioncreators as well
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ addReminder }, dispatch);
// }

export default connect(null, { addReminder })(App);
