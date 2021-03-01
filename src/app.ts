import morgan from 'morgan';
import express from "express";
import userRouter  from "./src/routes/user";
import expressRequestId from 'express-request-id';
const RequestId = expressRequestId();
import * as bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';


export default class App {

  public app: express.Application;
  public routes: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.swaggerSetup();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(morgan('dev'));
  }

  private swaggerSetup(): void {
  
    const swaggerDefinition = {
      info: {
          title: 'User Service Swagger API',
          version: '1.0.0',
          description: 'API documentation',
      },
      host: process.env.APP_HOST,
    };
    const options = {
        swaggerDefinition,
        apis: ['**/*.ts'],
    };
    const swaggerSpec = swaggerJSDoc(options);
    this.app.use('/user_service/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  
  }

}
