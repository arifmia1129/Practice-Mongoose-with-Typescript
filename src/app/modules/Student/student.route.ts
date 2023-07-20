import { Router } from 'express';
import * as studentController from './student.controller';

const router = Router();

router
  .route('/')
  .get(studentController.getStudent)
  .post(studentController.insertStudent);

router.get('/admin', studentController.getAdmin);

router.route('/:id').get(studentController.getStudentById);

export default router;
