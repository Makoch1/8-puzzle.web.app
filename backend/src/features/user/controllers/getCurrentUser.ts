import { Response } from "express";
import { AuthenticatedRequest } from "../../../middleware/auth";
import { UserIDJwtPayload } from "../../../types";
import { database } from "../../../database";
import { RowDataPacket } from "mysql2";
import { UserInfo } from "../../../types/UserInfo";

export const getCurrentUser = async (req: AuthenticatedRequest, res: Response<UserInfo>) => {
    const userID = (req.token as UserIDJwtPayload).userID;

    /* QUERY DB */
    try {
        const [results,] = await database.execute<RowDataPacket[]>(
            'SELECT `username`, `email` FROM `user` WHERE `id` = ?',
            [userID]
        );

        /* if it dont exist */
        if (!results.length) {
            throw new Error();
        }

        res.status(200)
            .json({
                username: results[0][0],
                email: results[0][1]
            })
    } catch (e) {
        res.status(404);
    }
}
