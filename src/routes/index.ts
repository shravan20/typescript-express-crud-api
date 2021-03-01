import wiring from '@app/wiring';

export class Routes {

  public routes(app: any): void {
    console.log(213)
    app.get('/api/v1/user/', wiring.userControllers.getUsers);

  }

}

