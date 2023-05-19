import { z } from "zod";
import {
  createUserSchema,
  createUserSchemaReturn,
} from "../schemas/users.schemas";

type IUserRequest = z.infer<typeof createUserSchema>;
type IUserReturn = z.infer<typeof createUserSchemaReturn>;

export { IUserRequest, IUserReturn };
