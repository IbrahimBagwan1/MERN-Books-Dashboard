const express = require('express');
const router = express.Router();
const controller = require('../controllers/booksController');

router.post('/books', controller.addBook);
router.get('/books', controller.getBooks);
router.delete('/books/:id', controller.deleteBook); 

module.exports = router;
