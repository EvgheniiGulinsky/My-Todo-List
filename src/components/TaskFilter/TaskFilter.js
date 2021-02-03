import React from 'react';

const TaskFilter = () => {
    
    return (
        <ul className="filters">
          <li>
              <button className="selected">All</button>
          </li>
          <li>
              <button>Active</button>
          </li>
          <li>
              <button>Complited</button>
          </li>
        </ul>
    )
  }

export default TaskFilter