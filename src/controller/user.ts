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
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     consumes:
 *      - application/json
 *     produces:
 *      - application/json
 *     responses:
 *      200:
 *       description: ok 
 */
public getUsers = async (req:Request,res:Response,next:NextFunction) => {
    res.status(200).send(await this.userService.getUsers());
  }

}