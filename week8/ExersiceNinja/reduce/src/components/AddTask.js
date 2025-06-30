import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const AddTask = () => {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TaskContext);

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: 'ADD_TASK', payload: text });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter a task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;
