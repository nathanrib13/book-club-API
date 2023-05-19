import { z } from "zod";

const createUserSchema = z.object({
  name: z.string().max(65),
  email: z.string().email().max(75),
  username: z.string().max(35),
  isAdmin: z.boolean().optional().default(false),
  password: z.string(),
});

const createUserSchemaReturn = createUserSchema
  .extend({
    id: z.number(),
  })
  .omit({ password: true });

export { createUserSchema, createUserSchemaReturn };
