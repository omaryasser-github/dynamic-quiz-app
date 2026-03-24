import { state, resetQuizState } from "./state.js";
import { fetchQuestions } from "./api.js";
import { renderApp } from "./renderer.js";

export async function startQuiz() {
  state.status = "loading";
  renderApp();

  try {
    const questions = await fetchQuestions();

    state.questions = questions;
    state.currentQuestionIndex = 0;
    state.score = 0;
    state.answerDisabled = false;
    state.selectedAnswerIndex = null;
    state.status = "quiz";

    renderApp();
  } catch (error) {
    state.status = "error";
    state.errorMessage = "Unable to load quiz questions.";
    renderApp();
  }
}

export function selectAnswer(answerIndex) {
  if (state.answerDisabled) return;

  state.answerDisabled = true;
  state.selectedAnswerIndex = answerIndex;

  const currentQuestion = state.questions[state.currentQuestionIndex];
  const selectedAnswer = currentQuestion.answers[answerIndex];

  if (selectedAnswer.correct) {
    state.score += 1;
  }

  renderApp();

  setTimeout(() => {
    nextQuestion();
  }, 1000);
}

export function nextQuestion() {
  state.currentQuestionIndex += 1;
  state.answerDisabled = false;
  state.selectedAnswerIndex = null;

  if (state.currentQuestionIndex < state.questions.length) {
    state.status = "quiz";
  } else {
    state.status = "result";
  }

  renderApp();
}

export function restartQuiz() {
  resetQuizState();
  state.status = "start";
  renderApp();
}