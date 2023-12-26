/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Book from "./Book";

const BookStore = ({ books }) => {
  return (
    <div>
      <h2>Books: {books.length}</h2>
      {books.map((book) => (
        <Book key={book.id} book={book}></Book>
      ))}
    </div>
  );
};

export default BookStore;
