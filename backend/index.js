import express from 'express';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config()

const app = express();

const MONGO_DB_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});

app.use('/books', booksRoute);
console.log(`MongoDB URL: ${MONGO_DB_URL}`);
console.log(`Type of MONGO DB URL ${typeof(MONGO_DB_URL)}`);

mongoose
  .connect(MONGO_DB_URL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });