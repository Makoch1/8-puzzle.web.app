import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Request, Response } from "express";
import { UserLoginBody } from "../../../types/UserLoginBody";
import { database } from "../../../database";
import { RowDataPacket } from "mysql2";
import { TokenData } from '../../../types/TokenData';
import { LoginResponse } from '../../../types/LoginResponse';
import { JWT_SECRET } from '../../../config';

export const loginUser = async (req: Request<{}, {}, UserLoginBody>, res: Response<LoginResponse>) => {
    // get password hash of specific user
    const username = req.body.username;
    const [results,] = await database.execute<RowDataPacket[]>(
        'SELECT `id`, `password_hash` FROM `user` WHERE `username` = ?',
        [username]
    );

    /* USERNAME MAY BE INVALID */
    if (!results.length) {
        res.status(401).json({ token: null, error: 'Invalid credentials' });
        return;
    }

    /* COMPARE, 401 IF WRONG PASSWORD */
    const password = req.body.password;
    const passwordHash = results[0][1];
    if (!bcrypt.compareSync(password, passwordHash)) {
        res.status(401).json({ token: null, error: 'Invalid credentials' });
        return;
    }

    /* SIGN TOKEN AND RETURN*/
    const tokenData: TokenData = {
        userID: results[0][0],
    };
    const token = jwt.sign(tokenData, JWT_SECRET, { expiresIn: '3d' })

    res.status(200).json({ token: token });
}
