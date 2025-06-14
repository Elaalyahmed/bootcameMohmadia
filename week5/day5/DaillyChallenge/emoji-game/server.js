const express = require('express');
const path = require('path');
const emojis = require('./data/emojis');

const app = express();
const PORT = 3000;

let leaderboard = [];

app.use(express.static('public'));
app.use(express.json());

let currentScore = 0;
let currentEmoji = null;

// Helper to shuffle and get random options
function getRandomEmojiQuestion() {
  const correct = emojis[Math.floor(Math.random() * emojis.length)];
  let options = [correct.name];
  while (options.length < 4) {
    const random = emojis[Math.floor(Math.random() * emojis.length)].name;
    if (!options.includes(random)) options.push(random);
  }
  return {
    emoji: correct.emoji,
    correct: correct.name,
    options: options.sort(() => Math.random() - 0.5)
  };
}

// Route to serve a new question
app.get('/api/question', (req, res) => {
  const question = getRandomEmojiQuestion();
  currentEmoji = question.correct;
  res.json(question);
});

// Route to handle guess submission
app.post('/api/guess', (req, res) => {
  const { guess } = req.body;
  let result;
  if (guess === currentEmoji) {
    currentScore++;
    result = { correct: true, score: currentScore };
  } else {
    result = { correct: false, score: currentScore };
  }
  res.json(result);
});

// Route to get leaderboard
app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboard.slice(0, 5));
});

// Route to submit score
app.post('/api/submit', (req, res) => {
  const { name } = req.body;
  leaderboard.push({ name, score: currentScore });
  leaderboard.sort((a, b) => b.score - a.score);
  currentScore = 0;
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
