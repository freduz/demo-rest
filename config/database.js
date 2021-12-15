import mongoose from 'mongoose';
import { DATABASE, DATABASE_PASSWORD } from './env';

const DB = DATABASE.replace('<password>', DATABASE_PASSWORD);

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`connected on ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

export default connectDb;
