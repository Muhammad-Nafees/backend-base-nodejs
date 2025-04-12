import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const parseBody = (userBody) => {
    let obj;
    if (typeof userBody == "object") obj = userBody;
    else obj = JSON.parse(userBody);
    return obj;
};

export const tokenGenerate = (userId) => {
    const token = jwt.sign({ user_id: userId }, process.env.JWT_SECRET_KEY, {
        expiresIn: "2d",
    });
    return token;
};

export class Bcrypt_Service {

    static bcrypt_hash_password = async (payload) => {
        const salt = await bcrypt.genSalt(12)
        const secure_password = await bcrypt.hash(payload, salt)
        return secure_password
    };

    static bcrypt_compare_password = async (user_password, password_hash) => {
        const password_compare = await bcrypt.compare(user_password, password_hash)
        return password_compare
    }
}