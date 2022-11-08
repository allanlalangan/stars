const Post = require('../models/Post');

const getPosts = async (req, res) => {
  try {
    await res.status(200).json({ message: 'Get All Posts Route' });
  } catch (error) {
    await res.status(500).json({ message: error.message || error });
  }
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
  try {
    await res.status(200).json({ message: 'Delete Post Route' });
  } catch (error) {
    await res.status(500).json({ message: error.message || error });
  }
};

const likePost = async (req, res) => {
  try {
    await res.status(200).json({ message: 'Like Post Route' });
  } catch (error) {
    await res.status(500).json({ message: error.message || error });
  }
};

module.exports = { getPosts, createPost, deletePost, likePost };
