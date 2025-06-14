// app.js
import express from 'express';
import { fetchPosts } from './data/dataService.js';

const app = express();
const PORT = 5000;

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the CRUD API using Express and Axios!');
});

// Posts route
app.get('/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log("Data successfully retrieved from JSONPlaceholder.");
    res.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    res.status(500).json({ error: "Failed to retrieve posts" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
