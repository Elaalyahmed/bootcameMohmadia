// TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../store/tasksSlice';

const TaskList = ({ onEdit }) => {
  const { tasksByDate, selectedDate } = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const tasks = tasksByDate[selectedDate] || [];

  return (
    <ul className="mt-4">
      {tasks.map(task => (
        <li key={task.id} className="flex justify-between items-center py-1">
          {task.text}
          <div>
            <button onClick={() => onEdit(task)} className="mx-2 text-blue-600">Edit</button>
            <button onClick={() => dispatch(deleteTask({ date: selectedDate, taskId: task.id }))} className="text-red-500">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
