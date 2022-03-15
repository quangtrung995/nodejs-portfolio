import { Request, Response } from 'express';
import { ProjectsModel } from '../models/interface';

import PostProjectSchema from '../models/projects.model';

//statuscode
import { STATUSCODE, MESSAGE } from '../utils/interface';

export const getAllProjects = async (req: Request, res: Response): Promise<void> => {
  try {
    const postProject = await PostProjectSchema.find();
    res.status(STATUSCODE.SUCCESS).json(postProject);
  } catch (error) {
    res.status(STATUSCODE.SERVER_ERROR).json({ message: error, statuscode: STATUSCODE.SERVER_ERROR });
    console.error('error: ', error);
  }
};

export const createProjects = async (req: Request, res: Response) => {
  const post = req.body as ProjectsModel;
  const newProject = new PostProjectSchema(post);

  try {
    await newProject.save();
    res.status(STATUSCODE.CREATED).json({ message: MESSAGE.SUCCESS, statuscode: STATUSCODE.CREATED });
  } catch (error) {
    res.status(STATUSCODE.SERVER_ERROR).json({ message: error, statuscode: STATUSCODE.SERVER_ERROR });
  }
};
