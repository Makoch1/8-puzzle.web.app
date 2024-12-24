import mysql from 'mysql2/promise'
import { DB_CONFIG } from '../config'

// TODO: somehow integrate error handling here
// maybe use: https://github.com/mysqljs/mysql?tab=readme-ov-file#error-handling

export const database = await mysql.createConnection(DB_CONFIG);
