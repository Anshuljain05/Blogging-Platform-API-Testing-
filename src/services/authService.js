const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { JWT_SECRET } = process.env;

exports.registerUser = async ({ username, password }) => {
  const user = new User({ username, password });
  await user.save();
  return user;
};

exports.loginUser = async ({ username, password }) => {
  const user = await User.findOne({ username });
  if (!user) throw new Error('Invalid username or password.');

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) throw new Error('Invalid username or password.');

  const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
  return token;
};
