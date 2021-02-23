/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Task = ({ task, identifier, onTaskEdit, onTaskDelete, onTaskComplete, onTaskChange }) => {
  const textInput = useRef(null);
  useEffect(() => {
    if (task.status === 'editing') {
      textInput.current.focus();
    }
  });
  return (
    <li className={task.status} key={identifier}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          defaultChecked={task.status === 'completed' ? 'checked' : ''}
          onClick={() => onTaskComplete(identifier)}
        />
        <label>
          <span className="description">{task.description}</span>
          <span className="created">{`Created ${task.time} ago`}</span>
        </label>
        <button
          type="button"
          className="icon icon-edit"
          onClick={() => {
            if (task.status !== 'completed') {
              onTaskEdit(identifier);
            }
          }}
        />
        <button type="button" className="icon icon-destroy" onClick={() => onTaskDelete(identifier)} />
      </div>
      {task.status === 'editing' ? (
        <input
          type="text"
          className="edit"
          defaultValue={task.description}
          ref={textInput}
          onKeyDown={(el) => {
            if (el.key === 'Enter') {
              const newTask = el.target.value;
              onTaskChange(identifier, newTask);
            }
          }}
        />
      ) : null}
    </li>
  );
};

Task.defaultProps = {
  onTaskEdit: () => {},
  onTaskDelete: () => {},
  onTaskComplete: () => {},
  onTaskChange: () => {},
  task: {},
  identifier: 0,
};

Task.propTypes = {
  onTaskEdit: PropTypes.func,
  onTaskDelete: PropTypes.func,
  onTaskComplete: PropTypes.func,
  onTaskChange: PropTypes.func,
  task: PropTypes.shape({
    description: PropTypes.string,
    status: PropTypes.string,
    key: PropTypes.number,
    created: PropTypes.instanceOf(Date),
    time: PropTypes.string,
  }),
  identifier: PropTypes.number,
};

export default Task;
