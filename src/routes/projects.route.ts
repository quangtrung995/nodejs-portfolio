/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import { createProjects, getAllProjects } from '../controllers';

const router = express.Router();

router.get('/', getAllProjects);
router.post('/', createProjects);

export default router;
