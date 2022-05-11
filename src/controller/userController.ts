import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/userService';

class UserController {
  constructor(private userService = new UserService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();
    res.status(StatusCodes.OK).json(users);
  };

  // public getById = async (req: Request, res: Response) => {
  //   const id = Number(req.params.id);
  //   const book = await this.userService.getById(id);

  //   if (!book) {
  //     return res.status(StatusCodes.NOT_FOUND)
  //       .json({ message: 'Book not found!' });
  //   }

  //   res.status(StatusCodes.OK).json(book);
  // };

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.userService.create(user);
    res.status(StatusCodes.CREATED).json(userCreated);
  };
}

export default UserController;