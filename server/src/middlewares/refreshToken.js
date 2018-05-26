import jwt from 'jsonwebtoken';
import Session from '../models/session.model';
import {randomString} from '../utils/common';

export const generateRefreshToken = (req, res, next) => {
    const secret = 'moresecret';
    const sessionData = {
        uId: req.user._id,
        str: randomString(32)
    };
    new Session(sessionData)
        .save()
        .then(data => {
            const refreshToken = jwt.sign(data.toObject(), secret);
            req.tokens = {
                refreshToken
            };
            next();
        })
        .catch(console.log);
};

export const validateRefreshToken = (req, res, next) => {
    const sessionDecoded = jwt.decode(req.headers.authorization);
    const _id = sessionDecoded._id;
    return Session.findOne({_id})
        .then(session => {
            if (!session) {
                return res.status(401).json({message: 'Unauthorized'});
            }
            req.tokens = {
                refreshToken: req.headers.authorization
            };
            next();
        })
        .catch(console.log);
};
