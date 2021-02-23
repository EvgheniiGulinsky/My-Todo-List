import React from 'react';
import PropTypes from 'prop-types';
import TaskFilter from '../TaskFilter/TaskFilter';

const Footer = ({ todos, onClearCompleted, onTaskFilter }) => {
  const tasksLeft = todos.filter((el) => el.status !== 'completed').length;
  return (
    <footer className="footer">
      <span className="todo-count">{`${tasksLeft} items left`}</span>
      <TaskFilter onTaskFilter={onTaskFilter} />
      <button className="clear-completed" onClick={onClearCompleted} type="button">
        Clear completed
      </button>
    </footer>
  );
};

Footer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  onClearCompleted: PropTypes.func,
  onTaskFilter: PropTypes.func,
};
Footer.defaultProps = {
  todos: [],
  onClearCompleted: () => {},
  onTaskFilter: () => {},
};

export default Footer;
