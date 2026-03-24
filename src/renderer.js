import { state } from "./state.js";
import { getResultMessage } from "./utils.js";

const root = document.getElementById("root");

function renderStartScreen() {
  root.innerHTML = `
    <div class="container">
      <div class="screen active" id="start-screen">
        <h1>Quiz Time!</h1>
        <p>Test your knowledge with these fun questions</p>
        <button id="start-btn">Start Quiz</button>
      </div>
    </div>
  `;
}

function renderLoadingScreen() {
  root.innerHTML = `
    <div class="container">
      <div class="screen active">
        <h1>Loading...</h1>
        <p>Preparing your quiz questions.</p>
      </div>
    </div>
  `;
}

function renderErrorScreen() {
  root.innerHTML = `
    <div class="container">
      <div class="screen active">
        <h1>Something went wrong</h1>
        <p>${state.errorMessage || "Failed to load questions."}</p>
        <button id="retry-btn">Try Again</button>
      </div>
    </div>
  `;
}

function renderQuizScreen() {
  const currentQuestion = state.questions[state.currentQuestionIndex];
  const progressPercent =
    ((state.currentQuestionIndex + 1) / state.questions.length) * 100;

  const answersHTML = currentQuestion.answers
    .map((answer, index) => {
      let extraClass = "";

      if (state.answerDisabled) {
        if (answer.correct) {
          extraClass = "correct";
        } else if (index === state.selectedAnswerIndex && !answer.correct) {
          extraClass = "incorrect";
        }
      }

      return `
        <button class="answer-btn ${extraClass}" data-index="${index}" ${state.answerDisabled ? "disabled" : ""
        }>
          ${answer.text}
        </button>
      `;
    })
    .join("");

  root.innerHTML = `
    <div class="container">
      <div class="screen active" id="quiz-screen">
        <div class="quiz-header">
          <h2 id="question-text">${currentQuestion.question}</h2>
          <div class="quiz-info">
            <p>
              Question <span id="current-question">${state.currentQuestionIndex + 1
    }</span>
              of
              <span id="total-questions">${state.questions.length}</span>
            </p>
            <p>Score: <span id="score">${state.score}</span></p>
          </div>
        </div>

        <div id="answer-container" class="answer-container">
          ${answersHTML}
        </div>

        <div class="progress-bar">
          <div id="progress" class="progress"  role="progressbar" aria-label="Quiz progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progressPercent}" style="width: ${progressPercent}%"></div>
        </div>
      </div>
    </div>
  `;
}

function renderResultScreen() {
  const maxScore = state.questions.length;
  const percentage = (state.score / maxScore) * 100;
  const message = getResultMessage(percentage);

  root.innerHTML = `
    <div class="container">
      <div id="result-screen" class="screen active">
        <h1>Quiz Results</h1>
        <div class="result-info">
          <p>
            You scored <span id="final-score">${state.score}</span>
            out of <span id="max-score">${maxScore}</span>
          </p>
          <div id="result-message">${message}</div>
        </div>
        <button id="restart-btn">Restart Quiz</button>
      </div>
    </div>
  `;
}

export function renderApp() {
  if (state.status === "start") {
    renderStartScreen();
  } else if (state.status === "loading") {
    renderLoadingScreen();
  } else if (state.status === "quiz") {
    renderQuizScreen();
  } else if (state.status === "result") {
    renderResultScreen();
  } else if (state.status === "error") {
    renderErrorScreen();
  }
}