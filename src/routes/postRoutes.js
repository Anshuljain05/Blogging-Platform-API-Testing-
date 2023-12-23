const express = require('express');
const { createPost, getPosts, getPostById, updatePost, deletePost } = require('../controllers/postController');
const { authenticateUser } = require('../middleware/authMiddleware');
const { rateLimit } = require('../middleware/rateLimitMiddleware');
const { validate } = require('../middleware/validationMiddleware');
const router = express.Router();

router.post('/posts', authenticateUser, validate, createPost);
router.get('/posts', rateLimit, getPosts);
router.get('/posts/:postId', rateLimit, getPostById);
router.put('/posts/:postId', authenticateUser, validate, updatePost);
router.delete('/posts/:postId', authenticateUser, deletePost);

module.exports = router;