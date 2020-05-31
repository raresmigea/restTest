import express from 'express';
const app = express();
import { connect } from 'mongoose';
import { json } from 'body-parser';

import 'dotenv/config';

//middleware - functions that executes when routes are being hit
// app.use('/posts', (req, res) => {
// 	console.log('this is middleware');
// });

app.use(json());

//import routes
import postsRoute from './routes/postsRoutes';

//middleware
app.use('/', postsRoute);

//routes
// app.get('/', (req, res) => {
// 	res.send('we are at home');
// });

// app.get('/posts', (req, res) => {
// 	res.send('we are at posts');
// });

//connect to database
connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log('connected to database.')
);

app.listen(3000);
