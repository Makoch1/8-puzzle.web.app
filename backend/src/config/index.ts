import dotenv from 'dotenv'
import { ConnectionOptions } from 'mysql2';

dotenv.config({ path: import.meta.dirname + '/.env' });

export const DB_CONFIG: ConnectionOptions = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || '8-puzzle',
    rowsAsArray: true
};

export const JWT_SECRET = process.env.JWT_SECRET;
