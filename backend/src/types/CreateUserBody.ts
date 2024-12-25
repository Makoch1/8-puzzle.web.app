import { UserInfo } from "./UserInfo";

export interface CreateUserBody extends UserInfo {
    // username and email from UserInfo...
    password: string,
};
