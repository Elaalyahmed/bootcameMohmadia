import React, { useState } from 'react';
import { List } from './components/List';
import { BookItem } from './components/BookItem';
import type { Book } from './types/book';


const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
  ]);

  const [newBook, setNewBook] = useState<Omit<Book, 'id'>>({
    title: '',
    author: '',
    year: undefined
  });

  const addBook = () => {
    if (newBook.title && newBook.author) {
      setBooks([...books, {
        ...newBook,
        id: Math.max(0, ...books.map(book => book.id)) + 1,
      }]);
      setNewBook({ title: '', author: '', year: undefined });
    }
  };

  return (
    <div className="app">
      <h1>Book List</h1>
      
      <List
        items={books}
        renderItem={(book: Book) => <BookItem book={book} />}
      />
      
      <div className="add-book-form">
        <input
          value={newBook.title}
          onChange={(e) => setNewBook({...newBook, title: e.target.value})}
          placeholder="Title"
        />
        <input
          value={newBook.author}
          onChange={(e) => setNewBook({...newBook, author: e.target.value})}
          placeholder="Author"
        />
        <input
          type="number"
          value={newBook.year || ''}
          onChange={(e) => setNewBook({...newBook, year: parseInt(e.target.value) || undefined})}
          placeholder="Year (optional)"
        />
        <button onClick={addBook}>Add Book</button>
      </div>
    </div>
  );
};

export default App;