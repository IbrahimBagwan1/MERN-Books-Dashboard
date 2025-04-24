import React, { useState } from 'react';
import axios from 'axios';

function AddBook() {
  const [form, setForm] = useState({
    title: '',
    author: '',
    price: '',
    stock: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const addBook = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/books', form);
    alert("Book Added!");
    setForm({ title: '', author: '', price: '' , stock: ''});
  };

  return (
    <form onSubmit={addBook}>
      <h2>Add Book</h2>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required /><br />
      <input name="author" placeholder="Author" value={form.author} onChange={handleChange} required /><br />
      <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} required /><br />
      <input name="stock" type="number" placeholder="Stock" value={form.stock} onChange={handleChange} required /><br />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddBook;
