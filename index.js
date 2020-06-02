import express from 'express';
const app = express();
import { connect } from 'mongoose';
import { json } from 'body-parser';

import 'dotenv/config';

app.use(json());

//import routes
import postsRoute from './routes/postsRoutes';

//middleware
app.use('/', postsRoute);

//connect to database
connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log('connected to database.')
);

app.listen(3000);
