import React from 'react';
import NewTaskForm from '../NewTaskForm/NewTaskForm'

const Header = () => {
    return (
    <header className="header">
      <h1>My Todo List</h1>
      <NewTaskForm/>
    </header>)
  }

export default Header