export const state = {
  status: "start",
  currentQuestionIndex: 0,
  score: 0,
  answerDisabled: false,
  selectedAnswerIndex: null,
  questions: [],
  errorMessage: "",
};

export function resetQuizState() {
  state.currentQuestionIndex = 0;
  state.score = 0;
  state.answerDisabled = false;
  state.selectedAnswerIndex = null;
  state.questions = [];
  state.errorMessage = "";
}