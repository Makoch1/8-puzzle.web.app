import { ResultSetHeader } from "mysql2";
import { database } from "../../../database";
import { Request, Response } from "express";

export const createPuzzle = async (req: Request<{ puzzle_id: string }>, res: Response) => {
    try {
        const [result,] = await database.execute<ResultSetHeader>(
            'INSERT INTO `puzzle`(`id`) VALUES (?)',
            [req.params.puzzle_id]
        )

        // status + json is there bc postman doesn't like it without the json, it gets stuck.
        res.status(200).json({ puzzle_id: req.params.puzzle_id });
    } catch (err) {
        // TODO: error handling
        res.status(409);
    }
}
