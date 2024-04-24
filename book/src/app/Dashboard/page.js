'use client'
import { useState, useEffect } from 'react';
import BookTable from '../../Components/BookTable';
import { Modal } from '../../Components/Modal';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    pages: '',
    genre: '',
    description: '',
    image: '',
    link: '', // For file input
  });

  useEffect(() => {
    fetch('http://localhost:3000/api/books')
      .then(response => response.json())
      .then(data => {
        setBooks(data.books);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleEdit = async (id) => {
    setShowModal(true);
    setFormData({
      title: "",
      author: "",
      pages: "",
      genre: "",
      description: "",
      image: "",
      link: "",
    });
  };

  const handleDelete = async (id) => {
    // Delete logic
  };

  const handleAdd = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      title: '',
      author: '',
      pages: '',
      genre: '',
      description: '',
      image: '',
      link: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    handleCloseModal(); 
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Book Management</h1>
      <button onClick={handleAdd} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">Add Book</button>
      <BookTable books={books} onEdit={handleEdit} onDelete={handleDelete} />
      
      <Modal open={showModal} onCancel={handleCloseModal} title="Add Book">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title:</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="text-gray-700 border rounded-md px-3 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="width" className="block text-gray-700 font-bold mb-2">Author:</label>
            <input type="text" id="width" name="width" value={formData.author} onChange={handleChange} className="text-gray-700 border rounded-md px-3 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="width" className="block text-gray-700 font-bold mb-2">pages:</label>
            <input type="text" id="width" name="width" value={formData.pages} onChange={handleChange} className="text-gray-700 border rounded-md px-3 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="width" className="block text-gray-700 font-bold mb-2">genre:</label>
            <input type="text" id="width" name="width" value={formData.genre} onChange={handleChange} className="text-gray-700 border rounded-md px-3 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="width" className="block text-gray-700 font-bold mb-2">description:</label>
            <input type="text" id="width" name="width" value={formData.description} onChange={handleChange} className="text-gray-700 border rounded-md px-3 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="width" className="block text-gray-700 font-bold mb-2">image:</label>
            <input type="text" id="width" name="width" value={formData.image} onChange={handleChange} className="text-gray-700 border rounded-md px-3 py-2 w-full" />
          </div>
          
          <div className="mb-4">
            <label htmlFor="link" className="block text-gray-700 font-bold mb-2">Link (File):</label>
            <input type="file" id="link" name="link" onChange={handleChange} className="text-gray-700 border rounded-md px-3 py-2 w-full" />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Submit</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Dashboard;
