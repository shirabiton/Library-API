import express from 'express';
import * as BorrowingService from '../services/BorrowingService';

const router = express.Router();

router.post('/', BorrowingService.createBorrowing);
router.get('/',  BorrowingService.getAllBorrowings);
router.get('/:id', BorrowingService.getBorrowingById);
router.put('/:id', BorrowingService.updateBorrowingById);
router.delete('/:id', BorrowingService.deleteBorrowingById);

export default router;
