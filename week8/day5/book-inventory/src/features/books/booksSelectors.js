// src/features/books/booksSelectors.js
import { createSelector } from '@reduxjs/toolkit';

export const selectBooks = state => state.books.items;

export const selectHorrorBooks = createSelector(
  [selectBooks],
  books => books.filter(book => book.genre === 'Horror')
);

export const selectFantasyBooks = createSelector(
  [selectBooks],
  books => books.filter(book => book.genre === 'Fantasy')
);

export const selectScienceFictionBooks = createSelector(
  [selectBooks],
  books => books.filter(book => book.genre === 'Science Fiction')
);

