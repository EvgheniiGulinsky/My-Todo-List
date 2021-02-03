import React from 'react';
import ReactDOM from 'react-dom';
import './app.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import TaskList from './components/TaskList/TaskList'






const App = () => {
  return (
    <section className="todoapp">
      <Header/>
      <section className="main">
        <TaskList/>
        <Footer/>
      </section>
    </section>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))