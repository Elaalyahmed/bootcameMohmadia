import React, { useContext } from 'react';
import { TaskContext } from '../components/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { state } = useContext(TaskContext);
  const { tasks, filter } = state;

  const filteredTasks = tasks.filter(task => {
    if (filter === 'ACTIVE') return !task.completed;
    if (filter === 'COMPLETED') return task.completed;
    return true; // 'ALL'
  });

  return (
    <ul>
      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
