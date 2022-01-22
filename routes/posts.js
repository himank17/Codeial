const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts.controller');

router.get('/posts', postController.posts);
module.exports = router;