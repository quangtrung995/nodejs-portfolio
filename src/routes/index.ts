import { Application } from 'express';
import { apiV1 } from '../constants';

import projectRouter from './projects.route';
import uploadImageRouteer from './uploadImage.route';

export default function route(app: Application) {
  app.use(`${apiV1}/project`, projectRouter);
  app.use(`${apiV1}/upload/image`, uploadImageRouteer);
}
