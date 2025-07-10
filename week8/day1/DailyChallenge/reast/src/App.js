import React from 'react';
import { TaskProvider } from './components/TaskContext';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';

function App() {
  return (
    <TaskProvider>
      <div style={{ margin: '20px' }}>
        <h1> Task Manager</h1>
        <AddTask />
        <TaskFilter />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
