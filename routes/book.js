var express = require('express');
var router = express.Router();
const booksController = require('../controllers/book');
router.get('/', booksController.getBooks);
router.post('/', booksController.addBook);
router.put('/:_id', booksController.editBook);
router.get('/:_id', booksController.getBookById);
router.get('/authorandcategory', booksController.getBookByAuthorCategory);
router.get('/bookandauthor', booksController.getBookByAuthor);
router.get('/bookandcondition/:name', booksController.getBookByCondition);
module.exports = router;
