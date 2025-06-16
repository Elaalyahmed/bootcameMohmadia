const express = require('express');
const router = express.Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

let currentQuestionIndex = 0;
let score = 0;

router.get('/', (req, res) => {
  currentQuestionIndex = 0;
  score = 0;
  res.json({
    message: "Quiz started!",
    question: triviaQuestions[currentQuestionIndex].question,
    questionNumber: currentQuestionIndex + 1,
    totalQuestions: triviaQuestions.length
  });
});

router.post('/', (req, res) => {
  const userAnswer = req.body.answer;
  if (!userAnswer) {
    return res.status(400).json({ "answer": "Paris" });


  }

  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;

  let responseMessage;
  if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
    score++;
    responseMessage = "Correct!";
  } else {
    responseMessage = `Wrong! The correct answer was: ${correctAnswer}`;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.json({
      message: responseMessage,
      quizFinished: true,
      finalScore: score,
      totalQuestions: triviaQuestions.length,
      scoreUrl: "/quiz/score"
    });
  } else {
    return res.json({
      message: responseMessage,
      nextQuestion: triviaQuestions[currentQuestionIndex].question,
      questionNumber: currentQuestionIndex + 1,
      totalQuestions: triviaQuestions.length
    });
  }
});

router.get('/score', (req, res) => {
  res.json({
    finalScore: score,
    totalQuestions: triviaQuestions.length,
    message: `Your final score is ${score} out of ${triviaQuestions.length}`
  });
});
router.delete('/question/:index', (req, res) => {
  const index = parseInt(req.params.index);

  if (isNaN(index) || index < 0 || index >= triviaQuestions.length) {
    return res.status(400).json({ error: "Invalid question index." });
  }

  const deletedQuestion = triviaQuestions.splice(index, 1);

  res.json({
    message: "Question deleted successfully.",
    deleted: deletedQuestion,
    remainingQuestions: triviaQuestions.length
  });
});



module.exports = router;
