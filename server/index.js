import express from 'express';
import { db } from './src/database';

const app = express();
const port = 4000;
app.listen(port, () => {
    console.log('Opaaaa rabotiii Stefani ');
});

