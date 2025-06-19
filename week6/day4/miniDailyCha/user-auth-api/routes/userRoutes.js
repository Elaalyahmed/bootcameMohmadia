const express = require('express');
const bcrypt = require('bcrypt');
const fs = require('fs');
const router = express.Router();

const filePath = './data/users.json';

// Read users
function readUsers() {
  try {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

// Write users
function writeUsers(users) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
  } catch (err) {
    console.error('Error writing file:', err);
  }
}

// POST /users/register
router.post('/register', async (req, res) => {
  const { name, lastName, email, username, password } = req.body;
  if (!name || !lastName || !email || !username || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const users = readUsers();

  const existing = users.find(
    user => user.username === username || user.password === password
  );

  if (existing) {
    return res.status(409).json({ message: 'Username or password already exists.' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: Date.now(),
    name,
    lastName,
    email,
    username,
    password: hashedPassword,
  };

  users.push(newUser);
  writeUsers(users);

  res.status(201).json({ message: 'User registered successfully!' });
});

// POST /users/login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const users = readUsers();
  const user = users.find(u => u.username === username);

  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).json({ message: 'Incorrect password.' });
  }

  res.json({ message: `Welcome ${user.name}! You are logged in.` });
});

// GET /users
router.get('/', (req, res) => {
  const users = readUsers();
  res.json(users);
});

// GET /users/:id
router.get('/:id', (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found.' });
  res.json(user);
});

// PUT /users/:id
router.put('/:id', (req, res) => {
  const users = readUsers();
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'User not found.' });

  users[index] = { ...users[index], ...req.body };
  writeUsers(users);
  res.json({ message: 'User updated successfully.' });
});

module.exports = router;
