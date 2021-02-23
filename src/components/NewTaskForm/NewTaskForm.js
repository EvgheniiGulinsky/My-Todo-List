import React from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = ({ onTaskAdd }) => (
  <input
    className="new-todo"
    placeholder="What needs to be done?"
    autoComplete="off"
    onKeyDown={onTaskAdd}
    id="new-task-form"
  />
);

NewTaskForm.propTypes = {
  onTaskAdd: PropTypes.func,
};

NewTaskForm.defaultProps = {
  onTaskAdd: () => {},
};

export default NewTaskForm;
