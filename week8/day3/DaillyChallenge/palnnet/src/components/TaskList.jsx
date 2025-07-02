import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTaskCompletion, deleteTask } from '../features/tasks/tasksSlice';
import EditTask from './EditTask';

const TaskList = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.tasks.selectedDate);
  const tasks = useSelector(state => state.tasks.tasksByDate[selectedDate] || []);

  const handleToggle = (taskId) => {
    dispatch(toggleTaskCompletion({ date: selectedDate, taskId }));
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask({ date: selectedDate, taskId }));
  };

  return (
    <div className="task-list">
      <h3>Tasks for {selectedDate}</h3>
      {tasks.length === 0 ? (
        <p>No tasks for this day</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
              />
              <span>{task.text}</span>
              <EditTask task={task} date={selectedDate} />
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;