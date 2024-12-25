import { JwtPayload } from "jsonwebtoken";

export interface UserIDJwtPayload extends JwtPayload {
    userID: string,
};
