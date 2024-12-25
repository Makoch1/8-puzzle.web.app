import { Router } from "express";
import { loginUser } from "./controllers/loginUser";

const sessionRoutes = Router();

sessionRoutes.post('/', loginUser);
sessionRoutes.delete('/',);

export { sessionRoutes }
