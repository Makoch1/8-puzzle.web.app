import { Request, Response } from "express";
import { CreateUserBody } from "../../../types/CreateUserBody";
import { hashPassword } from "../utils/hashPassword";
import { database } from "../../../database";
import { ResultSetHeader, RowDataPacket } from "mysql2";

// TODO: consider: make a function that "prepares" the input for the INSERT query, so that all logic is together
export const createUser = async (req: Request<{}, {}, CreateUserBody>, res: Response) => {
    // hash the password
    const hashedPassword = hashPassword(req.body.password);

    // check if username is taken, send error if taken
    const username = req.body.username;
    const [results,] = await database.execute<RowDataPacket[]>(
        'SELECT * FROM `user` WHERE `username` = ?',
        [req.body.username]
    );

    if (results.length) {
        res.status(409).json({ error: 'Username already taken' });
        return;
    }

    // check first if email is empty, make null if empty
    const email = req.body.email === '' ? null : req.body.email;

    // INSERT new user to db
    try {
        const [result,] = await database.execute<ResultSetHeader>(
            'INSERT INTO `user` (`username`, `email`, `password_hash`) VALUES (?, ?, ?)',
            [username, email, hashedPassword]
        );

        res.status(200).json({ username: username, email: req.body.email })
    } catch (e) {
        res.status(409).json({ error: e }); // TODO: ERROR HANDLING
    }
}
