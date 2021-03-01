import UserService from '@app/services/user';
import { UserRepository } from '@app/repository';
import { UserController } from '@app/controller';



class Wiring {
  /**
   * Repositories
   */
  public userRepository = new UserRepository();
  
  
  /**
   * Services
   */
  public userService = new UserService(this.userRepository);
  /**
   * Controllers
   */
  public userControllers =  new UserController(this.userService);

}


export default new Wiring();