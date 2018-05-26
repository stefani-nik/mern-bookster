
import express from 'express';
import expressConfig from './src/config/express.config';
import routesConfig from './src/config/routes.config';

import { db } from './src/database';

const app = express();
const port = 4000;

expressConfig(app);
routesConfig(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
