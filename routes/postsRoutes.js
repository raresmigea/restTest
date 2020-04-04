const express = require('express');

const router = express.Router();

router.get('/posts', (req, res) => {
	res.send('we are on posts');
});

router.get('/', (req, res) => {
	res.send('we are at home');
});

router.get('/specific', (req, res) => {
	res.send('specific posts');
});


module.exports = router;
