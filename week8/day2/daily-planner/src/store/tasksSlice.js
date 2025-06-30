// tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasksByDate: {}, // e.g., { '2025-06-30': [{ id: 1, text: 'Task', completed: false }] }
  selectedDate: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    selectDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    addTask: (state, action) => {
      const { date, task } = action.payload;
      state.tasksByDate[date] = [...(state.tasksByDate[date] || []), task];
    },
    editTask: (state, action) => {
      const { date, taskId, newText } = action.payload;
      const tasks = state.tasksByDate[date];
      const task = tasks.find(t => t.id === taskId);
      if (task) task.text = newText;
    },
    deleteTask: (state, action) => {
      const { date, taskId } = action.payload;
      state.tasksByDate[date] = state.tasksByDate[date].filter(t => t.id !== taskId);
    }
  }
});

export const { selectDate, addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
