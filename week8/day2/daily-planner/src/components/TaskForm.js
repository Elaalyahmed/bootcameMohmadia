// TaskForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../store/tasksSlice';
import { nanoid } from '@reduxjs/toolkit';

const TaskForm = ({ editingTask, setEditingTask }) => {
  const [text, setText] = useState(editingTask?.text || '');
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.tasks.selectedDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (editingTask) {
      dispatch(editTask({ date: selectedDate, taskId: editingTask.id, newText: text }));
      setEditingTask(null);
    } else {
      dispatch(addTask({ date: selectedDate, task: { id: nanoid(), text, completed: false } }));
    }

    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="p-2 border rounded w-full"
        placeholder="Enter a task"
      />
      <button type="submit" className="mt-2 bg-green-600 text-white px-4 py-2 rounded">
        {editingTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
