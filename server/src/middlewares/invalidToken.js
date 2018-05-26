import InvalidToken from '../models/invalidToken.model';
import jwt from 'jsonwebtoken';

export const createInvalidToken = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const value = jwt.decode(token).unq;

    new InvalidToken({value})
        .save()
        .then(() => {
            next()
        })
        .catch(console.log);
};