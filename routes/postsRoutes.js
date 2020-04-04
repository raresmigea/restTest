const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

router.get('/posts', (req, res) => {
	res.send('we are on posts');
});

router.get('/', (req, res) => {
	res.send('we are at home');
});

router.get('/specific', (req, res) => {
	res.send('specific posts');
});

router.post('/', (req, res) => {
	console.log(req.body);
});


module.exports = router;
