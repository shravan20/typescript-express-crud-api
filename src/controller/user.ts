import UserService from "@app/services/user";


export class UserController {
  private userService: UserService;

  public constructor(userService: UserService) {
    this.userService = userService;
  }

  public getUsers = async () => {
    return await this.userService.getUsers();
  }

}