// src/components/BookList.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectBooks,
  selectHorrorBooks,
  selectFantasyBooks,
  selectScienceFictionBooks,
} from '../features/books/booksSelectors';

const genreOptions = {
  All: selectBooks,
  Horror: selectHorrorBooks,
  Fantasy: selectFantasyBooks,
  'Science Fiction': selectScienceFictionBooks,
};

const BookList = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const books = useSelector(genreOptions[selectedGenre]);

  return (
    <div>
      <h2>Book Inventory</h2>
      <select value={selectedGenre} onChange={e => setSelectedGenre(e.target.value)}>
        {Object.keys(genreOptions).map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} ({book.genre})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
