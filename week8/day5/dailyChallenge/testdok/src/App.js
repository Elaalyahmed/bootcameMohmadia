import React, { useState, useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store';
import TaskList from './components/TaskList';
import CategorySelector from './components/CategorySelector';
import { addCategory } from './features/categories/categoriesSlice';
import { addTask } from './features/tasks/tasksSlice';

const AppContent = () => {
  const dispatch = useDispatch();
  const [selectedCategoryId, setSelectedCategoryId] = useState('');

  useEffect(() => {
    const workCategory = dispatch(addCategory('Work')).payload.id;
    const personalCategory = dispatch(addCategory('Personal')).payload.id;

    dispatch(addTask('Finish Redux setup', workCategory));
    dispatch(addTask('Go to the gym', personalCategory));
  }, [dispatch]);

  return (
    <div>
      <h1>Productivity Tracker</h1>
      <CategorySelector
        selectedCategoryId={selectedCategoryId}
        setSelectedCategoryId={setSelectedCategoryId}
      />
      <TaskList selectedCategoryId={selectedCategoryId} />
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <AppContent />
  </Provider>
);

export default App;