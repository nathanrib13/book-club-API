import { Request, Response, response } from "express";
import createUserService from "../services/users/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  const userData = req.body;

  const userCreated = await createUserService(userData);

  return res.status(201).json(userCreated);
};

export { createUserController };
