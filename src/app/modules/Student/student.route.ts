import { Router } from 'express';
import * as studentController from './student.controller';

const router = Router();

router
  .route('/')
  .get(studentController.getStudent)
  .post(studentController.insertStudent);

export default router;
