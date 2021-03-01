import UserService from "@app/services/user";


export class UserController {
  private userService: UserService;

  public constructor(userService: UserService) {
    this.userService = userService;
  }

  public getUsers = async (req,res,next) => {
    res.status(200).send(await this.userService.getUsers());
  }

}