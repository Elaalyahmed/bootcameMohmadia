import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { text: action.payload, completed: false }],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, idx) =>
          idx === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, idx) => idx !== action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
