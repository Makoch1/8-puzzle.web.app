import { Router } from "express";
import { createUser } from "./controllers/createUser";
import { auth } from "../../middleware/auth";
import { getCurrentUser } from "./controllers/getCurrentUser";

const userRoutes = Router();

userRoutes.get('/current', auth, getCurrentUser);
userRoutes.post('/', createUser);

export { userRoutes };
