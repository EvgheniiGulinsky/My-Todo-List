/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import { formatDistanceToNow } from 'date-fns';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TaskList from './components/TaskList/TaskList';

export default class App extends Component {
  state = {
    todos: [
      this.createTodoItem('First task', 0),
      this.createTodoItem('Second task', 1),
      this.createTodoItem('Third task', 2),
    ],
    filter: 'All',
  };

  componentDidMount = () => {
    this.interval = setInterval(
      () =>
        this.setState(({ todos }) => {
          const newTasks = [...todos];
          newTasks.forEach((el) => {
            el.time = formatDistanceToNow(el.created);
          });
          return { todos: newTasks };
        }),
      31000
    );
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  onTaskDelete = (id) => {
    this.setState(({ todos }) => {
      const index = todos.findIndex((el) => el.key === id);
      const newTasks = [...todos.slice(0, index), ...todos.slice(index + 1)];
      return { todos: newTasks };
    });
  };

  onTaskAdd = (el) => {
    if (el.key === 'Enter') {
      this.setState(({ todos }) => {
        const form = document.getElementById('new-task-form');
        const { value } = form;
        const task = this.createTodoItem(value, todos.length + 1);
        const newTasks = [...todos, task];
        form.value = '';
        return { todos: newTasks };
      });
    }
  };

  onTaskEdit = (id) => {
    this.setState(({ todos }) => {
      const newTasks = [...todos];
      const index = todos.findIndex((el) => el.key === id);
      newTasks[index].status = 'editing';
      return { todos: newTasks };
    });
  };

  onTaskComplete = (id) => {
    this.setState(({ todos }) => {
      const newTasks = [...todos];
      const index = todos.findIndex((el) => el.key === id);
      newTasks[index].status = newTasks[index].status === 'completed' ? 'active' : 'completed';
      return { todos: newTasks };
    });
  };

  onClearCompleted = () => {
    this.setState(({ todos }) => {
      const newTasks = todos.filter((el) => el.status !== 'completed');
      return { todos: newTasks };
    });
  };

  onTaskFilter = (filter) => {
    this.setState({ filter });
  };

  onTaskChange = (id, newTask) => {
    this.setState(({ todos }) => {
      const newTasks = [...todos];
      const index = todos.findIndex((el) => el.key === id);
      newTasks[index].status = 'active';
      newTasks[index].description = newTask;
      return { todos: newTasks };
    });
  };

  createTodoItem(description, id, status = 'active') {
    return {
      description,
      status,
      key: id,
      created: new Date(),
      time: formatDistanceToNow(new Date()),
    };
  }

  render() {
    const { todos, filter } = this.state;
    return (
      <section className="todoapp">
        <Header onTaskAdd={this.onTaskAdd} />
        <section className="main">
          <TaskList
            todos={todos}
            filter={filter}
            onTaskDelete={this.onTaskDelete}
            onTaskEdit={this.onTaskEdit}
            onTaskComplete={this.onTaskComplete}
            onTaskChange={this.onTaskChange}
          />
          <Footer todos={todos} onClearCompleted={this.onClearCompleted} onTaskFilter={this.onTaskFilter} />
        </section>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
