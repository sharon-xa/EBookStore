'use client';
// Home.js

import React, { useState, useEffect } from "react";
import Container from "@/Components/Container";
import Header from "@/Components/Header";
import BookCard from "@/Components/BookCard";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/books')
      .then(response => response.json())
      .then(data => {
        setBooks(data.books);
        setFilteredBooks(data.books); 
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filteredBooks);
  };

  return (
    <>
      <Header />
      <Container>
        <div className="flex flex-col justify-center items-center h-96">
          <h1 className="text-4xl font-bold text-white">Welcome to Digital Library</h1>
          <div className="flex justify-center items-center mt-4">
            <input
              type="text"
              placeholder="Search by book name"
              className="px-4 py-2 border border-gray-300 rounded-md"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 p-4">
          {filteredBooks.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      </Container>
    </>
  );
}
