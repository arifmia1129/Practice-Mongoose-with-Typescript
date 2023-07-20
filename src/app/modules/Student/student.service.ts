import { IStudent } from './student.interface';
import Student from './student.model';

export const insertStudentService = async (
  payload: IStudent
): Promise<IStudent> => {
  //   insert student into db
  const student = new Student(payload);

  console.log(student.fullName());

  await student.save();

  return student;
};

export const getStudentService = async (): Promise<IStudent[] | []> => {
  return await Student.find();
};

export const getStudentByIdService = async (
  payload: string
): Promise<IStudent | null> => {
  return await Student.findOne({ id: payload }, { name: 1, contactNo: 1 });
};
