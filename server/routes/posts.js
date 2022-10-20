const express = require('express');
const router = express.Router();
const {
  getPosts,
  createPost,
  deletePost,
  likePost,
} = require('../controllers/postsController');
const { ensureAuth } = require('../middleware/auth');

router.get('/', ensureAuth, getPosts);
router.put('/:id', ensureAuth, likePost);
router.delete('/:id', ensureAuth, deletePost);
router.post('/', ensureAuth, createPost);

module.exports = router;
