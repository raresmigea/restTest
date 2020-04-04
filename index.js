const express = require("express");

const app = express();

//middleware - functions that executes when routes are being hit
app.use('/posts', (req, res) => {
	console.log('this is middleware');
});

//routes
app.get('/', (req, res) => {
	res.send('we are at home');
});

app.get('/posts', (req, res) => {
	res.send('we are at posts');
});


app.listen(3000);