import {Router} from 'express';
import * as CommentController from '../controllers/comment.controller';

const commentRouter = new Router();

commentRouter.route('/comments').post(CommentController.createComment);

export default commentRouter;