import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasksByDate: {}, // Structure: { "YYYY-MM-DD": [{ id, text, completed }] }
  selectedDate: new Date().toISOString().split('T')[0], // Default to today
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { date, task } = action.payload;
      if (!state.tasksByDate[date]) {
        state.tasksByDate[date] = [];
      }
      state.tasksByDate[date].push({
        id: Date.now(),
        text: task.text,
        completed: false,
      });
    },
    editTask: (state, action) => {
      const { date, taskId, newText } = action.payload;
      const tasks = state.tasksByDate[date];
      if (tasks) {
        const taskIndex = tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
          tasks[taskIndex].text = newText;
        }
      }
    },
    deleteTask: (state, action) => {
      const { date, taskId } = action.payload;
      if (state.tasksByDate[date]) {
        state.tasksByDate[date] = state.tasksByDate[date].filter(
          task => task.id !== taskId
        );
      }
    },
    toggleTaskCompletion: (state, action) => {
      const { date, taskId } = action.payload;
      const tasks = state.tasksByDate[date];
      if (tasks) {
        const taskIndex = tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
          tasks[taskIndex].completed = !tasks[taskIndex].completed;
        }
      }
    },
    selectDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
});

export const {
  addTask,
  editTask,
  deleteTask,
  toggleTaskCompletion,
  selectDate,
} = tasksSlice.actions;

export default tasksSlice.reducer;