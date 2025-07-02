import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';


const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos); // ✅ تأكد من المسار الصحيح للـ todos

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
