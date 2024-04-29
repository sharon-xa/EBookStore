import React from 'react';

const BookCard = ({ book }) => {
    return (
        <div className="book-card bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
            <img className='w-full h-48 object-fit rounded-md' src={book.image} alt={book.title} />
            <h2 className='text-xl font-bold mt-4 text-black'>{book.title}</h2>
            <p className='text-gray-700 mt-2'>Author: {book.author}</p>
            <p className='text-gray-700'>Pages: {book.pages}</p>
            <p className='text-gray-700'>Genre: {book.genre}</p>
            <p className='text-gray-700'>Description: {book.description}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"><a href={book.link}>Preview</a></button>
        </div>
    );
};

export default BookCard;