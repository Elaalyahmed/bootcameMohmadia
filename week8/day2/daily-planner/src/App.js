// App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import DatePicker from './components/DatePicker';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [editingTask, setEditingTask] = useState(null);

  return (
    <Provider store={store}>
      <div className="max-w-xl mx-auto mt-10 p-4 shadow-lg rounded bg-white">
        <h1 className="text-2xl font-bold mb-4 text-center">🗓️ Daily Planner</h1>
        <DatePicker />
        <TaskForm editingTask={editingTask} setEditingTask={setEditingTask} />
        <TaskList onEdit={(task) => setEditingTask(task)} />
      </div>
    </Provider>
  );
};

export default App;
