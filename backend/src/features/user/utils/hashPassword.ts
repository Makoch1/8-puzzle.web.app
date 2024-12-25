import bcryptjs from "bcryptjs"

const ROUNDS = 10;

export const hashPassword = (password: string) => {
    const salt = bcryptjs.genSaltSync(ROUNDS);

    return bcryptjs.hashSync(password, salt);
}
