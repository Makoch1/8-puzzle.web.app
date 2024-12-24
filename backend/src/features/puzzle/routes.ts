import { Router } from "express";
import { createPuzzle } from "./controllers/createPuzzle";

const puzzleRoutes = Router();

puzzleRoutes.post('/:puzzle_id', createPuzzle);

export { puzzleRoutes }
