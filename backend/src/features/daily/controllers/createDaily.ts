import { Request, Response } from "express";
import { database } from "../../../database";
import { DailyResponse } from "../../../types/DailyResponse";
import { getCurrentDate } from "../utils/getCurrentDate";
import { RowDataPacket } from "mysql2";

export const createDaily = async (req: Request, res: Response<DailyResponse>) => {
    // query a puzzle that has yet to be a daily puzzle
    const [results,] = await database.query<RowDataPacket[]>(
        'SELECT id FROM `puzzle` WHERE id NOT IN (SELECT puzzle_id FROM daily_puzzle) LIMIT 1'
    );

    // 409 conflict if no more puzzles are available
    if (!results.length) {
        res.status(409);
        return;
    }

    // create daily puzzle
    try {
        const puzzleID = results[0][0];
        const currDate = getCurrentDate();

        const [result,] = await database.execute(
            'INSERT INTO `daily_puzzle` (`puzzle_id`, `date`) VALUES (?, ?)',
            [puzzleID, currDate]
        );

        res.json({ puzzle_id: puzzleID });
    } catch {
        res.status(409); // TODO: ERROR HANDLING
    }
} 
