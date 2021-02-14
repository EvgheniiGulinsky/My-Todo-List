import React from 'react';
import TaskFilter from '../TaskFilter/TaskFilter'

const Footer = ({todos, onClearCompleted, onTaskFilter}) => {
    const tasksLeft = todos.filter(el => el.status !== 'completed').length
    return (<footer className="footer">
                <span className="todo-count">
                    {tasksLeft + ' items left'}
                </span>
                <TaskFilter onTaskFilter={onTaskFilter}/>
                <button className="clear-completed" onClick={onClearCompleted}>
                    Clear completed
                </button>
            </footer>
    )
}


export default Footer