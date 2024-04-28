'use client';
import React, { useState, useEffect } from "react";
import Container from "@/Components/Container";
import BookCard from "@/Components/BookCard";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []);

  const handleSearch = (searchTerm) => {
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filteredBooks);
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/books");
      const data = await response.json();
      setBooks(data.books);
      setFilteredBooks(data.books);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Container>
        <div className="flex flex-col justify-center items-center h-96">
          <h1 className="text-4xl font-bold text-white">
            Welcome to Digital Library
          </h1>
          <div className="flex justify-center items-center mt-4">
            <input
              type="text"
              placeholder="Search by book name"
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {/* Use responsive grid columns */}
          {filteredBooks.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      </Container>
    </>
  );
}
