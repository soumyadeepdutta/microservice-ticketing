import { app } from './app';
import mongoose from 'mongoose';
const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY not set!!');
  }
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
    console.log('connected to db');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  app.listen(3000, () => {
    console.log('listening on port 3000!');
  });
};
start();
