import './App.css';
import React from 'react';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

function App() {
  return (
    <div className="container">
      <h1>📚 Bookstore Dashboard</h1>
      <AddBook />
      <hr />
      <BookList />
    </div>
  );
}

export default App;
