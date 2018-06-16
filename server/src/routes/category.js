import {Router} from 'express';
import passport from 'passport';
import * as CategoryController from '../controllers/category.controller';

const categoryRouter = new Router();

categoryRouter.get('/:categoryType', CategoryController.getPostCategories);

categoryRouter.get('/book/:id', CategoryController.getCategoryPosts);

categoryRouter.get('/article/:id', CategoryController.getCategoryPosts);

categoryRouter.get('/magazine/:id', CategoryController.getCategoryPosts);

categoryRouter.post('/', passport.authenticate('jwt'), CategoryController.createCategory);

//categoryRouter.get('/books', CategoryController.getBookCategories);

//categoryRouter.get('/magazines', CategoryController.getMagazineCategories);

//categoryRouter.get('/articles', CategoryController.getArticleCategories);

export default categoryRouter;