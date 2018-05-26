import User from '../models/user.model';
import InvalidToken from '../models/invalidToken.model';
import {Strategy, ExtractJwt} from 'passport-jwt';

let options = {};

options.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
options.secretOrKey = 'secret';

const configPassport = passport => {
    passport.use(new Strategy(options, (jwt, done) => {
        if (jwt.exp <= Math.floor(Date.now() / 1000)) { //Checks if the access token is expired
            return done(null, false);
        }

        return InvalidToken.findOne({value: jwt.unq})
            .then(token => {
                if (token) {
                    return done(null, false);
                }

                return User.findOne({_id: jwt.id})
                    .then(user => {
                        if (user) {
                            return done(null, user);
                        }
                        return done(null, false);
                    })
                    .catch(err => {
                        return done(err, false);
                    })
            })
            .catch(console.log);
    }));

    passport.serializeUser((user, done) => {
        done(null, user._id)
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            if (!user) {
                return done(null, false);
            }
            done(null, user);
        });
    });
};

export default configPassport;

