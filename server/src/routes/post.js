import {Router} from 'express';
import passport from 'passport';
import * as PostController from '../controllers/post.controller';
import {createComment}  from '../controllers/comment.controller';

const postRouter = new Router();

// TODO: Separate them 

//postRouter.get('/', PostController.getAllPosts);

postRouter.get('/books', PostController.getAllBooks);

postRouter.get('/magazines', PostController.getAllMagazines);

postRouter.get('/articles', PostController.getAllArticles);

postRouter.get('/books/:id', PostController.getBookById);

postRouter.get('/magazines/:id', PostController.getMagazineById);

postRouter.get('/articles/:id', PostController.getArticleById);

postRouter.post('/', passport.authenticate('jwt'), PostController.createPost);

postRouter.delete('/:id', passport.authenticate('jwt', {session: false}), PostController.createPost);

postRouter.post('/books/:id', passport.authenticate('jwt', {session: false}), createComment);

postRouter.post('/magazines/:id', passport.authenticate('jwt', {session: false}), createComment);

postRouter.post('/articles/:id', passport.authenticate('jwt', {session: false}), createComment);

postRouter.post('/books/rate/:id', passport.authenticate('jwt', {session: false}), PostController.ratePost);

postRouter.post('/magazines/rate/:id', passport.authenticate('jwt', {session: false}), PostController.ratePost);

postRouter.post('/articles/rate/:id', passport.authenticate('jwt', {session: false}), PostController.ratePost);


export default postRouter;