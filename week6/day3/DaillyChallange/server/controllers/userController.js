const bcrypt = require('bcrypt');
const pool = require('../config/db');
const userModel = require('../models/userModel');
const hashModel = require('../models/hashModel');

// ✅ Register function
const register = async (req, res) => {
  const { username, email, password, first_name, last_name } = req.body;

  if (!username || !email || !password || !first_name || !last_name) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const client = await pool.connect();

    try {
      await client.query('BEGIN');
      const newUser = await userModel.createUser(client, {
        email, username, first_name, last_name
      });
      await hashModel.createPassword(client, username, hashedPassword);
      await client.query('COMMIT');

      res.status(201).json({ message: "User registered", user: newUser });
    } catch (err) {
      await client.query('ROLLBACK');
      res.status(500).json({ message: "Transaction failed", error: err.message });
    } finally {
      client.release();
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ✅ Login function
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const userHash = await hashModel.getPasswordByUsername(username);
    if (!userHash) return res.status(401).json({ message: 'Invalid credentials' });

    const match = await bcrypt.compare(password, userHash.password);
    if (match) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ✅ More controller functions (example)
const getAllUsers = async (req, res) => {
  const users = await userModel.getAllUsers();
  res.json(users);
};

const getUserById = async (req, res) => {
  const user = await userModel.getUserById(req.params.id);
  res.json(user);
};

const updateUser = async (req, res) => {
  const updated = await userModel.updateUser(req.params.id, req.body);
  res.json(updated);
};

// ✅ Correct export
module.exports = {
  register,
  login,
  getAllUsers,
  getUserById,
  updateUser
};
