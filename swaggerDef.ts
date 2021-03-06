import * as path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';

let options = {
    openapi: '3.0.0',
    info: {
        // API informations (required)
        title: 'Node-Typescript API', // Title (required)
        version: '1.0.0', // Version (required)
        description: 'A sample API', // Description (optional)
    },
    servers: [
        { url: 'http://localhost:4040' }
    ],
    apis: [path.join(__dirname, './src/controller/user.ts')]
};

const swaggerSpec = swaggerJSDoc(options);

export = {
  swaggerSpec
};