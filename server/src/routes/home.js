import {Router} from 'express';
import passport from 'passport';
import * as HomeController from '../controllers/home.controller';

const homeRouter = new Router();

homeRouter.get('/', HomeController.sayHello);

export default homeRouter;