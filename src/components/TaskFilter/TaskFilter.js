/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const TaskFilter = ({ onTaskFilter }) => {
  const handleFilter = (event) => {
    const filterButtons = [...document.querySelectorAll('.filters li button')];
    if (filterButtons.includes(event.target)) {
      filterButtons.forEach((el) => el.classList.remove('selected'));
      event.target.classList.add('selected');
      onTaskFilter(event.target.id);
    }
  };
  return (
    <ul className="filters">
      <li>
        <button type="button" className="selected" id="All" onClick={handleFilter}>
          All
        </button>
      </li>
      <li>
        <button type="button" id="active" onClick={handleFilter}>
          Active
        </button>
      </li>
      <li>
        <button type="button" id="completed" onClick={handleFilter}>
          Completed
        </button>
      </li>
    </ul>
  );
};

TaskFilter.defaultProps = {
  onTaskFilter: () => {},
};
TaskFilter.propTypes = {
  onTaskFilter: PropTypes.func,
};

export default TaskFilter;
