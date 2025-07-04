import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTaskComplete, deleteTask, editTask } from '../features/tasks/tasksSlice';
import { selectTasksByCategory, selectAllTasks } from '../features/tasks/taskSelectors';

const TaskList = ({ selectedCategoryId }) => {
  const tasks = useSelector(
    selectedCategoryId ? selectTasksByCategory(selectedCategoryId) : selectAllTasks
  );
  const dispatch = useDispatch();

  const handleToggle = useCallback(id => {
    dispatch(toggleTaskComplete(id));
  }, [dispatch]);

  const handleEdit = useCallback((id, newTitle) => {
    dispatch(editTask({ id, title: newTitle }));
  }, [dispatch]);

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggle(task.id)}
          />
          <input
            type="text"
            value={task.title}
            onChange={e => handleEdit(task.id, e.target.value)}
          />
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;