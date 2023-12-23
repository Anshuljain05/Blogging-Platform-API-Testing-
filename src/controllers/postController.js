const postService = require('../services/postService');

exports.createPost = async (req, res) => {
  try {
    const post = await postService.createPost(req.user.id, req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await postService.getPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await postService.getPostById(req.params.postId);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ error: 'Post not found' });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await postService.updatePost(req.params.postId, req.user.id, req.body);
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    await postService.deletePost(req.params.postId, req.user.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
