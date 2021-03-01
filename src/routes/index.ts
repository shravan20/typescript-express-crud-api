import wiring from '@app/wiring';

export class Routes {

  public routes(app: any): void {
    
    app.get('/api/v1/user/', wiring.userControllers.getUsers);

  }

}

