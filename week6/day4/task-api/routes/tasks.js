const express = require('express');
const fs = require('fs-extra');
const path = require('path');
const router = express.Router();

const tasksFile = path.join(__dirname, '../data/tasks.json');

// Helper: Read tasks
const readTasks = async () => {
  try {
    const data = await fs.readFile(tasksFile, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    throw new Error('Error reading tasks');
  }
};

// Helper: Write tasks
const writeTasks = async (tasks) => {
  try {
    await fs.writeFile(tasksFile, JSON.stringify(tasks, null, 2));
  } catch (err) {
    throw new Error('Error writing tasks');
  }
};

// GET /tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await readTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /tasks/:id
router.get('/:id', async (req, res) => {
  try {
    const tasks = await readTasks();
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /tasks
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  try {
    const tasks = await readTasks();
    const newTask = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      title,
      description
    };
    tasks.push(newTask);
    await writeTasks(tasks);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /tasks/:id
router.put('/:id', async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  try {
    const tasks = await readTasks();
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) return res.status(404).json({ error: 'Task not found' });

    tasks[taskIndex] = { id: tasks[taskIndex].id, title, description };
    await writeTasks(tasks);
    res.json(tasks[taskIndex]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /tasks/:id
router.delete('/:id', async (req, res) => {
  try {
    const tasks = await readTasks();
    const newTasks = tasks.filter(t => t.id !== parseInt(req.params.id));
    if (newTasks.length === tasks.length) return res.status(404).json({ error: 'Task not found' });

    await writeTasks(newTasks);
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
