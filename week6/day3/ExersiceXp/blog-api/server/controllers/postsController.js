const Post = require('../models/postModel');

exports.getAllPosts = async (req, res) => {
  const result = await Post.getAllPosts();
  res.json(result.rows);
};

exports.getPostById = async (req, res) => {
  const { id } = req.params;
  const result = await Post.getPostById(id);
  if (result.rows.length === 0) return res.status(404).json({ error: 'Post not found' });
  res.json(result.rows[0]);
};

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  const result = await Post.createPost(title, content);
  res.status(201).json(result.rows[0]);
};

exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const result = await Post.updatePost(id, title, content);
  if (result.rows.length === 0) return res.status(404).json({ error: 'Post not found' });
  res.json(result.rows[0]);
};

exports.deletePost = async (req, res) => {
  const { id } = req.params;
  const result = await Post.deletePost(id);
  if (result.rows.length === 0) return res.status(404).json({ error: 'Post not found' });
  res.json({ message: 'Post deleted successfully' });
};
