import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import bookRoutes from "./routers/books.routes";
import { usersRoutes } from "./routers/users.routes";

const app: Application = express();
app.use(express.json());

app.use("/books", bookRoutes);
app.use("/users", usersRoutes);
app.use(handleErrors);

export default app;
