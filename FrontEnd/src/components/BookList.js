import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookList() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await axios.get('http://localhost:3000/books');
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);


  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/books/${id}`);
      // Refresh the list or update state
      fetchBooks(); // Refresh
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };
  
  // const deleteBook = async (id) => {
  //   await axios.delete(`http://localhost:3000/books/${id}`);
  //   fetchBooks(); // Refresh
  // };

  return (
    <div>
      <h2>All Books</h2>
      {books.map(book => (
        <div key={book._id} style={{ border: '1px solid #ddd', marginBottom: '10px', padding: '10px' }}>
          <h3>{book.title}</h3>
          <p><b>Author:</b> {book.author}</p>
          <p><b>Price:</b> ₹{book.price}</p>
          <p><b>Stock:</b> {book.stock}</p>
          <button onClick={() => deleteBook(book._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default BookList;
