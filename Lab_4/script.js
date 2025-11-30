const quizQuestions = [
  { question: "What is the capital of India?", answer: "new delhi" },
  { question: "How many days are in a week?", answer: "7" },
  { question: "Which programming language are you learning?", answer: "javascript" },
  { question: "What is 2 + 2?", answer: "4" },
  { question: "What color is the sky on a clear day?", answer: "blue" }
];

function runQuiz() {
  let score = 0;

  for (let i = 0; i < quizQuestions.length; i++) {
    let userAnswer = prompt(quizQuestions[i].question);
    if (userAnswer !== null) {
      userAnswer = userAnswer.toLowerCase().trim();
    }

    if (userAnswer === quizQuestions[i].answer) {
      alert("Correct!");
      score++;
    } else {
      alert("Wrong! Correct answer is: " + quizQuestions[i].answer);
    }
  }

  alert("Your final score is: " + score + " / " + quizQuestions.length);
}

runQuiz();
