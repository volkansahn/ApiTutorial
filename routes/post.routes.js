const express = require('express');
const {getPosts} = require('../controllers/post.controllers.js');

const router = express.Router();

router.post('/post', createPost);
router.get('/posts', getPosts);
router.get('/posts/:id', getPostDetail);
router.patch('/posts/:id', updatePost);
router.delete('/post/:id', deletePost);

module.exports = router;