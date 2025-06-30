import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskItem = ({ task }) => {
  const { dispatch } = useContext(TaskContext);

  return (
    <li
      style={{
        textDecoration: task.completed ? 'line-through' : 'none',
      }}
    >
      {task.text}
      <button onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}>
        ✅
      </button>
      <button onClick={() => dispatch({ type: 'REMOVE_TASK', payload: task.id })}>
        🗑️
      </button>
    </li>
  );
};

export default TaskItem;
