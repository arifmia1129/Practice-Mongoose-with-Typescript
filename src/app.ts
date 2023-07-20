import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { Schema } from 'mongoose';

const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// The steps of connect typescript with server
/**
 * Define Interface
 * Define Schema and use interface as a generic
 * Define Model
 * Finally database queries
 * */

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  //   creating interface
  interface IStudent {
    id: string;
    role: 'student';
    password: string;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    dateOfBirth: string;
    gender: 'male' | 'female' | 'other';
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
  }

  //   creating schema
  const userSchema = new Schema<IStudent>({
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ['student'],
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
    },
    email: {
      type: String,
    },
    contactNo: {
      type: String,
      required: true,
    },
    emergencyContactNo: {
      type: String,
      required: true,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
  });
});

export default app;
