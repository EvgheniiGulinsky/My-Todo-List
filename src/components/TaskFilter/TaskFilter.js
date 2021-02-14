import React, {Component} from 'react';

export default class TaskFilter extends Component {
    render() {
        const {onTaskFilter} = this.props
        return(
        <ul className="filters" onClick={(e) => {
            const filterButtons = [...document.querySelectorAll('.filters li button')]
            if(filterButtons.includes(e.target)){
                filterButtons.forEach(el => el.classList.remove('selected'))
                e.target.classList.add('selected')
                onTaskFilter(e.target.id)}}
            }
        >
          <li>
              <button className="selected" id='All'>All</button>
          </li>
          <li>
              <button id="active">Active</button>
          </li>
          <li>
              <button id="completed">Completed</button>
          </li>
        </ul>
        )
    }
    static defaultProps = {
        onTaskFilter: () => {}
    }
  }

 