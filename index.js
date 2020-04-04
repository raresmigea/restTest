const express = require("express");
const app = express();
const mongoose = require('mongoose');

require('dotenv/config');

//middleware - functions that executes when routes are being hit
// app.use('/posts', (req, res) => {
// 	console.log('this is middleware');
// });

//import routes
const postsRoute = require('./routes/postsRoutes');

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
mongoose.connect('mongodb+srv://raresmigea:notsassodark@cluster0-ptmqz.mongodb.net/test',
	{ useNewUrlParser: true },
	() => console.log("connected to database!"));


app.listen(3000);