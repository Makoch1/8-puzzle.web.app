import { Router } from "express";
import { createUser } from "./controllers/createUser";

const userRoutes = Router();

userRoutes.get('/:user_id',);
userRoutes.post('/', createUser);

export { userRoutes };
