import { renderApp } from "./renderer.js";
import { startQuiz, selectAnswer, restartQuiz } from "./quiz.js";

function setupEventListeners() {
  document.addEventListener("click", (event) => {
    if (event.target.id === "start-btn") {
      startQuiz();
    }

    if (event.target.id === "retry-btn") {
      startQuiz();
    }

    if (event.target.classList.contains("answer-btn")) {
      const answerIndex = Number(event.target.dataset.index);
      selectAnswer(answerIndex);
    }

    if (event.target.id === "restart-btn") {
      restartQuiz();
    }
  });
}

function initApp() {
  renderApp();
  setupEventListeners();
}

initApp();