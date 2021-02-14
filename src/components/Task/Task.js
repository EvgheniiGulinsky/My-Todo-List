import React, {Component} from 'react';
import PropTypes from 'prop-types';



export default class Task extends Component{
    render(){
        const {task, identifier, onTaskEdit, onTaskDelete, onTaskComplete, onTaskChange} = this.props
        return (
            <li className={task.status} key={identifier}>
                <div className="view">
                    <input className="toggle" type="checkbox" defaultChecked={task.status === 'completed' ? 'checked' : ''} onClick={() => onTaskComplete(identifier)}/>
                    <label>
                        <span className="description">
                            {task.description}
                        </span>
                        <span className="created">
                            {`created ${task.time} ago`}
                        </span>
                    </label>
                    <button 
                        className="icon icon-edit" 
                        onClick={() => {
                            if(task.status !== 'completed')
                                onTaskEdit(identifier)
                        }}
                    />
                    <button 
                        className="icon icon-destroy"
                        onClick={() => onTaskDelete(identifier)}
                    />
                </div>
                {task.status === 'editing' ? 
                        <input 
                            type="text" 
                            className="edit" 
                            defaultValue={task.description}
                            autoFocus
                            onKeyDown={(e) => {
                                if(e.key === 'Enter'){
                                    const newTask = e.target.value
                                    onTaskChange(identifier, newTask)
                                }
                            }}
                        />
                        : null}
            </li>
        )}
    static defaultProps = {
        onTaskEdit: () => {},
        onTaskDelete: () => {},
        onTaskComplete: () => {},
        onTaskChange: () => {}
    }

    static propTypes = {
        onTaskEdit: PropTypes.func,
        onTaskDelete: PropTypes.func,
        onTaskComplete: PropTypes.func,
        onTaskChange: PropTypes.func,
        task: PropTypes.object
    }
}

