import { Schema, model } from 'mongoose';
import IStudent from './student.interface';

//   creating schema
const studentSchema = new Schema<IStudent>({
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

//   creating model
const Student = model<IStudent>('Student', studentSchema);

export default Student;
