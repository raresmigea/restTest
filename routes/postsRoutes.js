import { Router } from 'express';
const router = Router();

import Post from '../models/Post';

router.get('/posts', (req, res) => {
  res.send('we are on posts.');
});

router.get('/', (req, res) => {
  res.send('we are at home.');
});

router.get('/specific', (req, res) => {
  res.send('specific posts.');
});

router.post('/', (req, res) => {
  const newPost = new Post(req.body);
  newPost.save();
  res.end();
});

export default router;
