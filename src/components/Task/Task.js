import React from 'react';


const Task = () => {
    const items = [{
        status: 'completed',
        description: 'Completed task',
        created: 'created 17 seconds ago'
    },{
        status: 'editing',
        description: 'Editing task',
        created: 'created 17 seconds ago'
    },{
        status: '',
        description: 'Active task',
        created: 'created 5 minutes ago',
    }]
    
    return (
        items.map(item => {return (
        <li className={item.status}>
            <div className="view">
                <input className="toggle" 
                    type="checkbox"
                />
                <label>
                    <span className="description">
                        {item.description}
                    </span>
                    <span className="created">
                        {item.created}
                    </span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
            </div>
            {item.status === 'editing' ? 
                    <input 
                        type="text" 
                        className="edit" 
                        defaultValue="Editing task">
                    </input> 
                    : null}
        </li>
        )})
    )
}

export default Task