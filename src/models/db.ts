import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/libraryDB');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed: ', error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
