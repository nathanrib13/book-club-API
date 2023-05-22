import { Router } from "express";
import {
  createUserController,
  updateUserController,
  deleteUserController,
  readAllUsersController,
} from "../controllers/users.controller";

const usersRoutes = Router();

usersRoutes.post("", createUserController);
usersRoutes.get("", readAllUsersController);
usersRoutes.patch("/:id", updateUserController);
usersRoutes.delete("/:id", deleteUserController);

export { usersRoutes };
