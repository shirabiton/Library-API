import { Request, Response } from 'express';
import BookModel, { Book } from '../models/BookModel';

// Create a book
export const createBook = async (req: Request, res: Response) => {
  try {
    const book = await BookModel.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read all books
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await BookModel.find();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read book by ID
export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await BookModel.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read books by author
export const getBooksByAuthor = async (req: Request, res: Response) => {
  try {
    const authorId = req.params.authorId;
    const books: Book[] = await BookModel.find({ 'author._id' : authorId });

    if (!books.length) {
      return res.status(404).json({ message: 'Books by this author not found' });
    }
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read books by genre
export const getBooksByGenre = async (req: Request, res: Response) => {
  try {
    const genreName = req.params.genre;
    const books: Book[] = await BookModel.find({ genre: genreName });

    if (!books.length) {
      return res.status(404).json({ message: 'No books were found matching this genre' });
    }
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read books by language
export const getBooksByLanguage = async (req: Request, res: Response) => {
  try {
    const languageName = req.params.language;
    const books: Book[] = await BookModel.find({ language : languageName });

    if (!books.length) {
      return res.status(404).json({ message: 'No books found in this language' });
    }
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read books by publish year
export const getBooksByPublishYear = async (req: Request, res: Response) => {
  try {
    const publishYearValue = req.params.publishYear;
    const books: Book[] = await BookModel.find({ publishYear : publishYearValue });

    if (!books.length) {
      return res.status(404).json({ message: 'No books were found that were published this year' });
    }
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read books by subscriber 
export const getBooksBySubscriber = async (req: Request, res: Response) => {
  try {
    const subscriberId = req.params.subscriberId;

    const books: Book[] = await BookModel.find({ 'subscribers._id': subscriberId });

    if (!books.length) {
      return res.status(404).json({ message: 'Books with this subscriber not found' });
    }

    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update book by ID
export const updateBookById = async (req: Request, res: Response) => {
  try {
    const book = await BookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete book by ID
export const deleteBookById = async (req: Request, res: Response) => {
  try {
    const book = await BookModel.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

