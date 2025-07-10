import React, { useState, useContext } from 'react';
import { TaskContext } from './TaskContext';

const AddTask = () => {
  const [input, setInput] = useState('');
  const { dispatch } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    dispatch({ type: 'ADD_TASK', payload: input });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '10px' }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
        style={{ padding: '5px', width: '200px' }}
      />
      <button type="submit" style={{ marginLeft: '5px' }}>
        Add
      </button>
    </form>
  );
};

export default AddTask;
