import express from 'express';
import bodyParser from 'body-parser';
import './db/mongoose';
import orgniasationRouter from './routes/organisation';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(orgniasationRouter);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
