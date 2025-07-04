import { createSelector } from '@reduxjs/toolkit';

export const selectAllTasks = state => state.tasks || [];
export const selectAllCategories = state => state.categories || [];

export const selectTasksByCategory = categoryId =>
  createSelector([selectAllTasks], tasks =>
    tasks.filter(task => task.categoryId === categoryId)
  );

export const selectCompletedTasks = createSelector([selectAllTasks], tasks =>
  tasks.filter(task => task.completed).length
);

export const selectCategoryById = categoryId =>
  createSelector([selectAllCategories], categories =>
    categories.find(cat => cat.id === categoryId)
  );