import UserService from "@app/services/user";
import { Request, Response, NextFunction } from 'express';

export class UserController {
  private userService: UserService;

  public constructor(userService: UserService) {
    this.userService = userService;
  }


/**
 * @swagger
 *
 * /api/v1/user:
 *   get:
 *     summary: Retrieve a list of users
 *     description: Get Users Data
 *     consumes:
 *      - application/json
 *     produces:
 *      - application/json
 *     responses:
 *      200:
 *       description: ok
 */
public getUsers = async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send(await this.userService.getUsers());
  }

}
