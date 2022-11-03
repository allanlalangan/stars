const express = require('express');
const router = express.Router();
const {
  getPosts,
  createPost,
  deletePost,
  likePost,
} = require('../controllers/postsController');
const { protectRoute } = require('../middleware/auth');

router.get('/', protectRoute, getPosts);
router.put('/:id', protectRoute, likePost);
router.delete('/:id', protectRoute, deletePost);
router.post('/', protectRoute, createPost);

module.exports = router;
