import React from 'react';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';



const App = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoItem/>
      
    </div>
  );
};

export default App;
