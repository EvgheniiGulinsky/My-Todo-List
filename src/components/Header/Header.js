import React from 'react';
import NewTaskForm from '../NewTaskForm/NewTaskForm'

const Header = (props) => {
    return (
    <header className="header">
      <h1>My Todo List</h1>
      <NewTaskForm
        onTaskAdd = {props.onTaskAdd}
      />
    </header>)
  }

export default Header