const Post = require('../models/postModel');

exports.createPost = async (userId, { title, content }) => {
  const post = new Post({ title, content, author: userId });
  await post.save();
  return post;
};

exports.getPosts = async () => {
  return Post.find().populate('author', 'username');
};

exports.getPostById = async (postId) => {
  return Post.findById(postId).populate('author', 'username');
};

exports.updatePost = async (postId, userId, { title, content }) => {
  const post = await Post.findById(postId);

  if (!post) {
    throw new Error('Post not found');
  }

  if (post.author.toString() !== userId) {
    throw new Error('Unauthorized to update this post');
  }

  post.title = title;
  post.content = content;

  await post.save();
  return post;
};

exports.deletePost = async (postId, userId) => {
  const post = await Post.findById(postId);

  if (!post) {
    throw new Error('Post not found');
  }

  if (post.author.toString() !== userId) {
    throw new Error('Unauthorized to delete this post');
  }

  await post.remove();
};
