import {Router} from 'express';
import passport from 'passport';
import * as PostController from '../controllers/post.controller';
import {createComment}  from '../controllers/comment.controller';

const postRouter = new Router();

postRouter.post('/', passport.authenticate('jwt'), PostController.createPost);

postRouter.delete('/:id', passport.authenticate('jwt', {session: false}), PostController.createPost);

postRouter.post('/:id', passport.authenticate('jwt', {session: false}), createComment);

export default postRouter;