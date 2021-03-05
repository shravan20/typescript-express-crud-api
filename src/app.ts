import morgan from 'morgan';
import express from "express";
import { Routes } from '@app/routes';
import expressRequestId from 'express-request-id';
const RequestId = expressRequestId();
import * as bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../swaggerDef';

export default class App {

  public app: express.Application;
  public routes: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routes.routes(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(morgan('dev'));
  }

  private swaggerSetup(): void {

    this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

}
