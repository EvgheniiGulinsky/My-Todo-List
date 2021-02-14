import React from 'react';

const NewTaskForm = (props) => {
  return (<input className="new-todo"
                 placeholder="What needs to be done?"   
                 autoFocus=""
                 autoComplete="off"
                 onKeyDown={props.onTaskAdd}
                 id="new-task-form"
            />
            )
  }

export default NewTaskForm