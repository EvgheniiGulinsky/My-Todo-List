import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task'
 
export default class TaskList extends Component {
  render(){
    const {todos, filter, onTaskDelete, onTaskEdit, onTaskComplete, onTaskChange} = this.props
    const filtered = todos.filter(el => filter === 'All' || el.status === filter)
    const tasks = filtered.map(el => {
      return (
          <Task
            task={el}
            identifier={el.key}
            key={el.key}
            onTaskDelete={onTaskDelete}
            onTaskEdit={onTaskEdit}
            onTaskComplete={onTaskComplete}
            onTaskChange={onTaskChange}
          />
      )
    })
    return (
      <ul className="todo-list">
        {tasks}
      </ul>
    )}
    static defaultProps = {
      todos: [],
      filter: 'All',
      onTaskDelete: () => {}, 
      onTaskEdit: () => {}, 
      onTaskComplete: () => {}, 
      onTaskChange: () => {}

    }
    static propTypes = {
      todos: PropTypes.array,
      filter: PropTypes.string,
      onTaskDelete: PropTypes.func, 
      onTaskEdit: PropTypes.func, 
      onTaskComplete: PropTypes.func, 
      onTaskChange: PropTypes.func
    }
  }