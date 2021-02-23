import React from 'react';
import PropTypes from 'prop-types';
import NewTaskForm from '../NewTaskForm/NewTaskForm';

const Header = ({ onTaskAdd }) => (
  <header className="header">
    <h1>My Todo List</h1>
    <NewTaskForm onTaskAdd={onTaskAdd} />
  </header>
);

Header.propTypes = {
  onTaskAdd: PropTypes.func,
};

Header.defaultProps = {
  onTaskAdd: () => {},
};
export default Header;
