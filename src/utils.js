export function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export function getResultMessage(percentage) {
  if (percentage === 100) return "Perfect! You're a genius!";
  if (percentage >= 80) return "Great job! You know your stuff!";
  if (percentage >= 60) return "Good effort! Keep learning!";
  if (percentage >= 40) return "Not bad! Try again to improve!";
  return "Keep studying! You'll get better!";
}

export function validateQuestion(question) {
  return (
    question &&
    typeof question.question === "string" &&
    Array.isArray(question.answers) &&
    question.answers.length === 4 &&
    question.answers.filter((a) => a.correct).length === 1
  );
}