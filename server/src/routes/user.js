import {Router} from 'express';
import passport from 'passport';
import * as UserController from '../controllers/user.controller';

const userRouter = new Router();

userRouter.get('/profile/:username', UserController.getUserInfo);

userRouter.get('/read/:username', UserController.getUserReadPosts);

userRouter.get('/reading/:username', UserController.getUserCurrentlyReadingPosts);

userRouter.get('/toread/:username', UserController.getUserWantToReadPosts);

userRouter.post('/profile/:username', UserController.updateUserInfo);


export default userRouter;