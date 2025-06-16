const express = require('express');
const router = express.Router();
const books = require('../models/bookModel');

// READ all books
router.get('/', (req, res) => {
  res.json(books);
});

// READ a single book by ID
router.get('/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// CREATE a new book
router.post('/', (req, res) => {
  const { title, author, publishedYear } = req.body;

  if (!title || !author || !publishedYear) {
    return res.status(400).json({ message: "Please provide title, author, and publishedYear" });
  }

  // Generate a new id (max existing id + 1)
  const newId = books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1;

  const newBook = {
    id: newId,
    title,
    author,
    publishedYear,
  };

  books.push(newBook);
  res.status(201).json(newBook);
});
// ✅ POST a new book
router.post('/', (req, res) => {
  const { title, author, publishedYear } = req.body;

  if (!title || !author || !publishedYear) {
    return res.status(400).json({ message: "Please provide title, author, and publishedYear" });
  }

  const newId = books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1;

  const newBook = {
    id: newId,
    title,
    author,
    publishedYear
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// ✅ PUT update a book
router.put('/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  const { title, author, publishedYear } = req.body;

  if (title) book.title = title;
  if (author) book.author = author;
  if (publishedYear) book.publishedYear = publishedYear;

  res.status(200).json(book);
});

// ✅ DELETE a book
router.delete('/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const bookIndex = books.findIndex(b => b.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  const deletedBook = books.splice(bookIndex, 1)[0];

  res.status(200).json({
    message: `Book with ID ${deletedBook.id} deleted successfully.`,
    deletedBook,
  });
});


module.exports = router;
