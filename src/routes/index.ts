import wiring from '@app/wiring';

export class Routes {

  public routes(app: any): void {
    
    app.get('/api/v1/user/')

    app.get('/api/status', (req, res) => {
      res.send({});
  });


  }

}

