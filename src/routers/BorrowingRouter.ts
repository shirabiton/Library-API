import express from 'express';
import * as BorrowingService from '../services/BorrowingService';

const router = express.Router();

router.post('/', BorrowingService.borrowBook);
router.get('/',  BorrowingService.getAllBorrowings);
router.get('/:id', BorrowingService.getBorrowingById);
router.put('/:id', BorrowingService.returnBook);
router.delete('/:id', BorrowingService.lateBookReturnDate);

export default router;
