import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";
import { JWT_SECRET } from '../config';

export interface AuthenticatedRequest extends Request {
    token: string | JwtPayload,
};

// https://dev.to/juliecherner/authentication-with-jwt-tokens-in-typescript-with-express-3gb1
export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        /* if it don't exist*/
        if (!token) {
            throw new Error();
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        (req as AuthenticatedRequest).token = decoded;

        next();
    } catch (e) {
        res.status(401).json({ error: 'Unauthenticated' })
    }
}
