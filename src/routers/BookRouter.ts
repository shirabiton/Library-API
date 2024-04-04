import express from 'express';
import * as BookService from '../services/BookService';

const router = express.Router();

router.post('/', BookService.createBook);
router.get('/',  BookService.getAllBooks);
router.get('/:id', BookService.getBookById);
router.put('/:id', BookService.updateBookById);
router.delete('/:id', BookService.deleteBookById);

export default router;
