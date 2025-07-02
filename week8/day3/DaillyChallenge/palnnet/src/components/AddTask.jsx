import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../features/tasks/tasksSlice';

const AddTask = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.tasks.selectedDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      dispatch(addTask({ date: selectedDate, task: { text: taskText } }));
      setTaskText('');
    }
  };

  return (
    <div className="add-task">
      <h3>Add New Task</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter task description"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;