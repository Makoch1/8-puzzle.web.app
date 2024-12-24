import { Router } from "express";
import { getDaily } from "./controllers/getDaily";
import { createDaily } from "./controllers/createDaily";

const dailyRoutes = Router();

dailyRoutes.get('/', getDaily);
dailyRoutes.post('/', createDaily);

export { dailyRoutes };
