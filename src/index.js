import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './app.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import TaskList from './components/TaskList/TaskList'
import { formatDistanceToNow } from 'date-fns'






export default class App extends Component {
  state = {
    todos: [
      this.createTodoItem('First task', 0),
      this.createTodoItem('Second task', 1),
      this.createTodoItem('Third task', 2)
    ],
    filter: 'All'
  }

  createTodoItem(description, id, status = 'active') {
    return {
      description: description,
      status: status,
      key: id,
      created: new Date(),
      time: formatDistanceToNow(new Date())
    }
  }
  
  componentDidMount = () => {
    this.interval = setInterval(() => this.setState(({todos}) => {
      const newTasks =  [...todos]
      newTasks.map(el => el.time = formatDistanceToNow(el.created))
      return {todos: newTasks}
    }), 31000);
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  onTaskDelete = (id) => {
    this.setState(({todos}) => {
      const index = todos.findIndex(el => el.key === id)
      const newTasks = [...todos.slice(0, index), ...todos.slice(index+1)]
      return {todos: newTasks}
    })
  }

  onTaskAdd = (e) => {
    if (e.key === 'Enter'){
      this.setState(({todos}) => {
        const form = document.getElementById('new-task-form')
        const value = form.value
        const task = this.createTodoItem(value, todos.length + 1)
        const newTasks = [...todos, task]
        form.value = ''
        return {todos: newTasks}
      })
    }
  }

  onTaskEdit = (id) => {
    this.setState(({todos}) => {
      const newTasks = [...todos]
      const index = todos.findIndex(el => el.key === id)
      newTasks[index].status = 'editing'
      return {todos: newTasks}
    })
  }

  onTaskComplete = (id) => {
    this.setState(({todos}) => {
      const newTasks = [...todos]
      const index = todos.findIndex(el => el.key === id)
      newTasks[index].status = newTasks[index].status === 'completed' ? 'active' : 'completed'
      return {todos: newTasks}
    })
  } 

  onClearCompleted = () => {
    this.setState(({todos}) => {
      const newTasks = todos.filter(el => el.status !== 'completed')
      return {todos: newTasks}
    })
  } 

  onTaskFilter = (filter) => {
    this.setState({filter: filter})
  }

  onTaskChange = (id, newTask) => {
    this.setState(({todos}) => {
      const newTasks = [...todos]
      const index = todos.findIndex(el => el.key === id)
      newTasks[index].status = 'active'
      newTasks[index].description = newTask
      return {todos: newTasks}
    })
  }
  render () {
    return (
      <section className="todoapp">
        <Header 
          onTaskAdd = {this.onTaskAdd}
        />
        <section className="main">
          <TaskList 
            todos={this.state.todos}
            filter={this.state.filter}
            onTaskDelete = {this.onTaskDelete}
            onTaskEdit = {this.onTaskEdit}
            onTaskComplete = {this.onTaskComplete}
            onTaskChange = {this.onTaskChange}
          />
          <Footer
            todos={this.state.todos}
            onClearCompleted={this.onClearCompleted}
            onTaskFilter={this.onTaskFilter}
          />
        </section>
      </section>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))