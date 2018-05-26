import jwt from 'jsonwebtoken';
import {randomString} from '../utils/common';

export const generateAccessToken = (req, res, next) => {
    const userId = jwt.decode(req.tokens.refreshToken).uId;
    const payload = {
        id: userId,
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        unq: randomString(32)
    };
    const secret = 'secret';
    req.tokens.accessToken = jwt.sign(payload, secret);
    next();
};
