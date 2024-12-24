import { RowDataPacket } from "mysql2";
import { database } from "../../../database";
import { Request, Response } from "express";
import { DailyResponse } from "../../../types/DailyResponse";
import { createDaily } from "./createDaily";
import { getCurrentDate } from "../utils/getCurrentDate";

export const getDaily = async (req: Request, res: Response<DailyResponse>) => {
    const currDate = getCurrentDate();

    /* Using the formatted date, query for the daily puzzle */
    const [results,] = await database.execute<RowDataPacket[]>(
        'SELECT puzzle_id FROM `daily_puzzle` WHERE date = ?',
        [currDate]
    );

    if (results.length) {
        res.json({ puzzle_id: results[0][0] })
    } else { /* When there is no daily puzzle yet, create one using createDaily */
        // create daily is supposed to send the same json containing the puzzle_id
        await createDaily(req, res);
    }
};
