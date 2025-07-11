import React from "react";

import type { Book } from "../../types/book";

interface BookItemProps {
  book: Book;
}

export const BookItem = ({ book }: BookItemProps) => {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      {book.year && <p>Year: {book.year}</p>}
    </div>
  );
};