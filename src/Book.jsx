/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Book = ({ book }) => {
  const { name, price } = book;
  return (
    <div
      style={{
        border: "2px solid grey",
        padding: "20px",
        margin: "20px",
        borderRadius: "20px",
      }}
    >
      <h2>Name: {name}</h2>
      <p>Price: {price}</p>
    </div>
  );
};

export default Book;
