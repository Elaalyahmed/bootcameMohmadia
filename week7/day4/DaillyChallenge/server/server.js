const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// GET endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello From Express' });
});

// POST endpoint with detailed logging
app.post('/api/world', (req, res) => {
  console.log('\n=== INCOMING POST REQUEST ===');
  console.log('Headers:', req.headers);
  console.log('Full Request Body:', req.body);
  
  const { input } = req.body;
  
  // Detailed client message logging
  if (input) {
    console.log(`Client message received: "${input}"`);
    console.log(`Message length: ${input.length} characters`);
    console.log(`Received at: ${new Date().toISOString()}`);
  } else {
    console.warn('WARNING: No input field received in request body');
  }

  res.json({ 
    message: `I received your POST request. This is what you sent me: ${input}`
  });
});

app.listen(PORT, () => {
  console.log(`\nServer running on http://localhost:${PORT}`);
  console.log('Ready to receive client messages...\n');
});