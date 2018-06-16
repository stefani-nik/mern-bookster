import { Router } from 'express';
import passport from 'passport';
import * as AccountController from '../controllers/account.controller';
import {generateRefreshToken, validateRefreshToken} from '../middlewares/refreshToken';
import {generateAccessToken} from '../middlewares/accessToken';
import {sendTokens} from '../middlewares/respond';
import {createInvalidToken} from '../middlewares/invalidToken';

const accountRouter = new Router();

accountRouter.post('/register', AccountController.register);

accountRouter.post('/login', AccountController.login, generateRefreshToken, generateAccessToken, sendTokens);

accountRouter.get('/logout', AccountController.logout);

accountRouter.post('/token', validateRefreshToken, generateAccessToken, sendTokens);

export default accountRouter;