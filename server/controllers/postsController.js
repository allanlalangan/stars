const Post = require('../models/Post');
const User = require('../models/User');

const getPosts = async (req, res) => {
  const posts = await Post.find();
  await res.status(200).json(posts);
};

const createPost = async (req, res) => {
  try {
    const post = await Post.createPost(req);
    console.log(post);
    await res
      .status(201)
      .json({ post, message: 'Post Successfully Published' });
  } catch (error) {
    await res.status(500).json({ message: error.message || error });
  }
};

const deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  try {
    if (!post) {
      res.status(404);
      throw new Error('Post not found');
    } else if (post.user.toString() !== req.user.id) {
      res.status(401);
      throw new Error('Post delete not authorized');
    }

    await post.remove();
    res.status(200).json({
      message: `post deleted`,
      deletedPostId: req.params.id,
      posts: await Post.find(),
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const likePost = async (req, res) => {
  // const post = await Post.findById(req.params.id);
  // const user = await User.findById(req.user.id);
  // // console.log(post);
  // // console.log(user.id);

  try {
    const posts = await Post.likePost(req);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message || error });
  }
};

module.exports = { getPosts, createPost, deletePost, likePost };
