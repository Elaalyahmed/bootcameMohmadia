import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../redux/actions';

const TodoApp = ({ todos, addTodo, toggleTodo, removeTodo }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Redux Todo List</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a todo..."
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>
            <span
              onClick={() => toggleTodo(idx)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(idx)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { addTodo, toggleTodo, removeTodo })(TodoApp);
