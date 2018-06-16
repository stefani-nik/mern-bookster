import accountRouter from '../routes/account';
import postRouter from '../routes/post';
import commentRouter from '../routes/comment';
import homeRouter from '../routes/home';
import categoryRouter from '../routes/category';
import userRouter from '../routes/user';

const routesConfig = (app) => {
    app.use('/api/home', homeRouter)
    app.use('/api/posts', postRouter);
    app.use('/api/category', categoryRouter)
    // app.use('/posts/:id', commentRouter);
    app.use('/api/account', accountRouter);
    app.use('/api/user', userRouter);
};

export default routesConfig;