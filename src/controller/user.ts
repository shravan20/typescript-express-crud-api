import UserService from "@app/services/user";


export class UserController {
  private userService: UserService;

  public constructor(userService: UserService) {
    this.userService = userService;
  }


/**
 * @swagger
 * /api/v1/user:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/
public getUsers = async (req,res,next) => {
    res.status(200).send(await this.userService.getUsers());
  }

}