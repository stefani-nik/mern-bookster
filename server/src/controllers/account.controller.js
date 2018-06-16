import User from '../models/user.model';
import InvalidToken from '../models/invalidToken.model';
import {generateHashedPassword, generateSalt} from '../utils/encryption';

export const register = (req, res) => {
    const salt = generateSalt();
    const password = generateHashedPassword(req.body.password, salt);
    const userData = {
        salt,
        password,
        username: req.body.username,
        email: req.body.email
    };

    new User(userData)
        .save()
        .then(result => {
           res.status(201).json({message: 'success'});
        })
        .catch(err => {
            res.send(err)
        });
};

export const login = (req, res, next) => {
    const invalidCredentialsErrorMessage = 'Invalid username ot password!';

    User
        .findOne({username: req.body.username})
        .then(user => {
            if (!user || !user.authenticate(req.body.password)) {
                return res.status(401).json({message: invalidCredentialsErrorMessage});
            }

            req.user = user;
            next();
        })
        .catch(err => {
            res.send(err);
        });
};

export const logout = (req, res) => {
    req.logout();
    res.redirect('/');
};

