import { Request, Response } from 'express';
import { getStudentService, insertStudentService } from './student.service';

export const insertStudent = async (req: Request, res: Response) => {
  try {
    const response = await insertStudentService(req.body);

    res.status(201).json({
      success: true,
      message: 'Successfully inserted student information',
      studentInfo: response,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Couldn't insert student information",
      error: error.message,
    });
  }
};

export const getStudent = async (req: Request, res: Response) => {
  try {
    const students = await getStudentService();

    if (!students.length) {
      return res.status(400).json({
        success: false,
        message: "Couldn't get student information",
      });
    }

    res.status(201).json({
      success: true,
      message: 'Successfully get student information',
      students,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Couldn't get student information",
      error: error.message,
    });
  }
};
