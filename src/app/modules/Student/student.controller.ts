import { Request, Response } from 'express';
import {
  getAdminService,
  getStudentByIdService,
  getStudentService,
  insertStudentService,
} from './student.service';

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

    res.status(200).json({
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

export const getAdmin = async (req: Request, res: Response) => {
  try {
    const students = await getAdminService();

    if (!students.length) {
      return res.status(400).json({
        success: false,
        message: "Couldn't get admin student information",
      });
    }

    res.status(200).json({
      success: true,
      message: 'Successfully get admin student information',
      students,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Couldn't get admin student information",
      error: error.message,
    });
  }
};

export const getStudentById = async (req: Request, res: Response) => {
  try {
    const student = await getStudentByIdService(req.params.id);

    if (!student) {
      return res.status(400).json({
        success: false,
        message: "Couldn't get student information",
      });
    }

    res.status(201).json({
      success: true,
      message: 'Successfully get student information',
      student,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Couldn't get student information",
      error: error.message,
    });
  }
};
