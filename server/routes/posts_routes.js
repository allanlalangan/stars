const express = require('express');
const router = express.Router();
const {
  getPosts,
  createPost,
  deletePost,
  likePost,
} = require('../controllers/postsController');

router.get('/', getPosts);
router.put('/:id', likePost);
router.delete('/:id', deletePost);
router.post('/', createPost);

module.exports = router;
