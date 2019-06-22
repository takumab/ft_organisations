import express from 'express';
import bodyParser from 'body-parser';
import './db/mongoose';
import orgniasationRouter from './routes/organisation';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(orgniasationRouter);

export default app;
