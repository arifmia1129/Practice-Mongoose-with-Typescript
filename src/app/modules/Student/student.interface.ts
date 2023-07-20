//   creating interface
export interface IStudent {
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

export interface IStudentMethods {
  fullName(): string;
}
