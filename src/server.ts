import mongoose from 'mongoose';
import app from './app';

const port: number = 5000;

// database connection
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
  console.log('Database is connected');
  app.listen(port, () => {
    console.log(`Server is  listening on port ${port}`);
  });
}

main().catch((err) => console.log(err));
