import express from 'express';
import { connect } from 'mongoose';
import { json } from 'body-parser';

const app = express();

import 'dotenv/config';

app.use(json());

import postsRoute from './routes/postsRoutes';

//postsRoute - it's a middleware
app.use('/', postsRoute);

connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log('connected to database.')
);

app.listen(3000);
