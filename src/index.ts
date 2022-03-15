//express
import express, { Application } from 'express';

//cors
import cors from 'cors';

//mongoose
import mongoose from 'mongoose';

//route
import route from './routes';

//swagger
import swaggerUi from 'swagger-ui-express';
import * as option from './swagger.json';

//dotenv
import 'dotenv/config';

(function () {
  //static
  const mongodb = process.env.MONGODB_URI as string;
  const host = process.env.HOST as string;
  const port = process.env.PORT ?? 5000;

  // Initialize express
  const app: Application = express();

  // Middleware
  app.use(express.json({ limit: '30mb' }));
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  // Routes
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(option));
  route(app);

  // Listen
  mongoose
    .connect(mongodb)
    .then(() => app.listen(port, () => console.log(`---------Server listen on port ${host}:${port}---------`)))
    .catch(err => console.error(`Something went wrong at MongooseDB...`, err));
})();
