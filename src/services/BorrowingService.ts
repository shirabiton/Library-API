import { Request, Response } from 'express';
import BorrowingModel, {Borrowing} from '../models/BorrowingModel';

// borrow book
export const borrowBook = async (req: Request, res: Response) => {
  try {
    const book = req.params.book;
    const employee = req.params.employee;
    const subscriber = req.params.subscriber;
    const today = new Date();
    const intendedReturnDate = new Date(today);
    intendedReturnDate.setDate(today.getDate() + 14);
    const newBorrowing = {
      "borrowingDate": today,
      "intendedReturnDate": intendedReturnDate,
      "returnDate": null,
      "book": book,
      "employee": employee,
      "subscriber": subscriber,
    }
    const newEmployee = await BorrowingModel.create(newBorrowing);
    res.status(201).json(newEmployee);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read all borrowings
export const getAllBorrowings = async (req: Request, res: Response) => {
  try {
    const borrowings = await BorrowingModel.find();
    res.json(borrowings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read borrowing by ID
export const getBorrowingById = async (req: Request, res: Response) => {
  try {
    const borrowing = await BorrowingModel.findById(req.params.id);
    if (!borrowing) {
      return res.status(404).json({ message: 'Borrowing not found' });
    }
    res.json(borrowing);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// return book
export const returnBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const book = req.params.book;
    const today = new Date();

    const updatedBorrowing = {
      returnDate: today,
      book: book,
    };

    const borrowing = await BorrowingModel.findByIdAndUpdate(id, updatedBorrowing, { new: true });

    if (!borrowing) {
      return res.status(404).json({ message: 'Borrowing not found' });
    }
    res.json(borrowing);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Late Book Return Date
export const lateBookReturnDate = async (req: Request, res: Response) => {
  try {
    const { id, days } = req.params;
    const borrowing = await BorrowingModel.findById(id);
    
    if (!borrowing) {
      return res.status(404).json({ message: 'Borrowing not found' });
    }
    
    const newIntendedReturnDate = new Date(borrowing.intendedReturnDate);
    newIntendedReturnDate.setDate(newIntendedReturnDate.getDate() + parseInt(days));
    
    borrowing.intendedReturnDate = newIntendedReturnDate;
    
    await borrowing.save();

    res.status(200).json(borrowing); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
