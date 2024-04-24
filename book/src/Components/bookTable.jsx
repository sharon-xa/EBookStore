// BookTable.js

import React from 'react';

const BookTable = ({ books, onEdit, onDelete }) => {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Image</th>
          <th className="border border-gray-300 px-4 py-2">Title</th>
          <th className="border border-gray-300 px-4 py-2">Author</th>
          <th className="border border-gray-300 px-4 py-2">Genre</th>
          <th className="border border-gray-300 px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <tr key={book.id}>
            <td className="border border-gray-300 px-4 py-2">
              <img src={book.image} alt={book.title} className="h-16" />
            </td>
            <td className="border border-gray-300 px-4 py-2">{book.title}</td>
            <td className="border border-gray-300 px-4 py-2">{book.author}</td>
            <td className="border border-gray-300 px-4 py-2">{book.genre}</td>
            <td className="border border-gray-300 px-4 py-2">
              <button onClick={() => onEdit(book.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Edit</button>
              <button onClick={() => onDelete(book.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;
