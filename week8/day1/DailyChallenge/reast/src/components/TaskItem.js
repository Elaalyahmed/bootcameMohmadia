import React, { useContext, useState, useRef } from 'react';
import { TaskContext } from '../components/TaskContext';

const TaskItem = ({ task }) => {
  const { dispatch } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();

  const handleEdit = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleSave = () => {
    dispatch({ type: 'EDIT_TASK', payload: { id: task.id, text: inputRef.current.value } });
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input ref={inputRef} defaultValue={task.text} />
          <button onClick={handleSave}>💾 Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </span>
          <button onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}>✅</button>
          <button onClick={() => dispatch({ type: 'REMOVE_TASK', payload: task.id })}>🗑️</button>
          <button onClick={handleEdit}>✏️ Edit</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
