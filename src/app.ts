import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import studentRoutes from './app/modules/Student/student.route';

const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// all routes here
app.use('/api/v1/student', studentRoutes);

// The steps of connect typescript with server
/**
 * Define Interface
 * Define Schema and use interface as a generic
 * Define Model
 * Finally database queries
 * */

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  res.send('Server is running');
});

export default app;
