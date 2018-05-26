import accountRouter from '../routes/account';
import postRouter from '../routes/post';
import commentRouter from '../routes/comment';
import homeRouter from '../routes/home';

const routesConfig = (app) => {
    app.use('/api/home', homeRouter)
    app.use('/api/posts', postRouter);
    // app.use('/posts/:id', commentRouter);
    app.use('/api/account', accountRouter);
};

export default routesConfig;