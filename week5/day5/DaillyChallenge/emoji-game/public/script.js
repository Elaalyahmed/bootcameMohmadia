let currentOptions = [];
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
  loadQuestion();
});

function loadQuestion() {
  fetch('/api/question')
    .then(res => res.json())
    .then(data => {
      document.getElementById('emoji-display').textContent = data.emoji;
      const form = document.getElementById('guess-form');
      form.innerHTML = '';
      currentOptions = data.options;

      data.options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.type = 'button';
        btn.onclick = () => submitGuess(option);
        form.appendChild(btn);
      });
    });
}

function submitGuess(guess) {
  fetch('/api/guess', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ guess })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById('feedback').textContent = data.correct ? "✅ Correct!" : "❌ Wrong!";
      document.getElementById('score').textContent = `Score: ${data.score}`;
      setTimeout(() => {
        document.getElementById('feedback').textContent = '';
        loadQuestion();
      }, 1000);
    });
}
