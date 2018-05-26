import bodyParser from 'body-parser';
import passport from 'passport';
import passportConfig from './passport.config';


const expressConfig = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(passport.initialize());
    passportConfig(passport);
};

export default expressConfig;