import mongoose, { Schema, Document } from 'mongoose';
import { Employee } from './EmployeeModel';
import { Subscriber } from './SubscriberModel';
import { Book } from './BookModel';

export interface Borrowing extends Document {
    id: number;
    borrowingDate: Date;
    intendedReturnDate: Date;
    returnDate: Date;
    book: Book;
    employee: Employee;
    subscriber: Subscriber;
}

const BorrowingSchema: Schema = new Schema({
    id: { type: Number, required: true },
    borrowingDate: { type: Date, required: true },
    intendedReturnDate: { type: Date, required: true }, // תאריך החזרה מיועד
    returnDate: { type: Date }, // תאריך החזרה בפועל
    book: { type: Schema.Types.ObjectId, ref:'Book', required: true },
    employee: { type: Schema.Types.ObjectId, ref:'Employee'},
    subscriber: { type: Schema.Types.ObjectId, ref:'Subscriber', required: true },
});

export default mongoose.model<Borrowing>('Borrowing', BorrowingSchema);
