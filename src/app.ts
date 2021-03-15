import morgan from 'morgan';
import express from "express";
import { Routes } from '@app/routes';
import expressRequestId from 'express-request-id';
const RequestId = expressRequestId();
import * as bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
// import options from './swaggerDef';

export default class App {

  public app: express.Application;
  public routes: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routes.routes(this.app);
    this.swaggerSetup();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(morgan('dev'));
    this.app.use(cors());
  }

  private swaggerSetup(): void {

    let swaggerDefinition = {
      info: { // API information (required)
          title: 'Node-Typescript API', // Title (required)
          version: '1.0.0', // Version (required)
          description: 'A UserMgmt API', // Description (optional)
      },
      // basePath: '/',
      host: 'localhost:4040/',
      swagger: '2.0',
    };

    let options = {
      swaggerDefinition,
      apis: ['./**/*.ts']
    }

    const swaggerSpec = swaggerJSDoc(options);
    this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

}
