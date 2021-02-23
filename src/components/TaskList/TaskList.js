import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';

const TaskList = ({ todos, filter, onTaskDelete, onTaskEdit, onTaskComplete, onTaskChange }) => {
  const filtered = todos.filter((el) => filter === 'All' || el.status === filter);
  const tasks = filtered.map((el) => (
    <Task
      task={el}
      identifier={el.key}
      key={el.key}
      onTaskDelete={onTaskDelete}
      onTaskEdit={onTaskEdit}
      onTaskComplete={onTaskComplete}
      onTaskChange={onTaskChange}
    />
  ));
  return <ul className="todo-list">{tasks}</ul>;
};

TaskList.defaultProps = {
  todos: [],
  filter: 'All',
  onTaskDelete: () => {},
  onTaskEdit: () => {},
  onTaskComplete: () => {},
  onTaskChange: () => {},
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  onTaskDelete: PropTypes.func,
  onTaskEdit: PropTypes.func,
  onTaskComplete: PropTypes.func,
  onTaskChange: PropTypes.func,
};

export default TaskList;
