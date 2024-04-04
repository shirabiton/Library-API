import express from 'express';
import connectDB from './models/db';
import bookRouter from './routers/BookRouter';
import borrowingRouter from './routers/BorrowingRouter';
import employeeRouter from './routers/EmployeeRouter';
import monthlyWorkingHoursRouter from './routers/MonthlyWorkingHoursRouter';
import subscriberRouter from './routers/SubscriberRouter';

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/books', bookRouter);
app.use('/borrowings', borrowingRouter);
app.use('/employees', employeeRouter);
app.use('/monthlyWorkingHours', monthlyWorkingHoursRouter);
app.use('/subscribers', subscriberRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
