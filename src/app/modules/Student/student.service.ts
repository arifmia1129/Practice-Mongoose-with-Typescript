import IStudent from './student.interface';
import Student from './student.model';

export const insertStudentService = async (
  payload: IStudent
): Promise<IStudent> => {
  //   insert student into db
  const student = new Student(payload);

  await student.save();

  return student;
};

export const getStudentService = async (): Promise<IStudent[] | []> => {
  return await Student.find();
};
