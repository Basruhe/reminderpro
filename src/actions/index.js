import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from "../constants";
// to do: figure out whether its necessary to have a constants.js
// try removing the constants.js and add the imported constants to this file.

export const addReminder = (text, dueDate) => {
  const action = {
    type: ADD_REMINDER,
    text: text,
    dueDate: dueDate,
  };

  console.log("action in addReminder", action);
  return action;
};

export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id,
  };
  console.log("deleting in actions", action);
  return action;
};

export const clearReminders = () => {
  return {
    type: CLEAR_REMINDERS,
  };
};
