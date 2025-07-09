// server.js
const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Simulated database
let posts = [
    { id: 1, title: 'First Post', content: 'This is my first blog post!' },
    { id: 2, title: 'Second Post', content: 'Another interesting post.' }
];
let nextId = 3;

// GET all posts
app.get('/posts', (req, res) => {
    res.json(posts);
});

// GET specific post by ID
app.get('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('Post not found');
    res.json(post);
});

// POST create new post
app.post('/posts', (req, res) => {
    const post = {
        id: nextId++,
        title: req.body.title,
        content: req.body.content
    };
    posts.push(post);
    res.status(201).json(post);
});

// PUT update existing post
app.put('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('Post not found');
    
    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;
    
    res.json(post);
});

// DELETE post
app.delete('/posts/:id', (req, res) => {
    const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (postIndex === -1) return res.status(404).send('Post not found');
    
    posts.splice(postIndex, 1);
    res.status(204).send();
});

// Error handling for invalid routes
app.use((req, res) => {
    res.status(404).send('Route not found');
});

// Server error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});