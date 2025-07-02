import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/todo/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
    if (!todo) return null; // ✅ تجنّب استخدام todo إذا لم يكن موجودًا


  return (
    <li>
      <span
        onClick={() => dispatch(toggleTodo(todo.id))}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch(removeTodo(todo.id))}></button>
    </li>
  );
};

export default TodoItem;
