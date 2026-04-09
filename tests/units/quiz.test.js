import { describe, it, expect, beforeEach, vi } from "vitest";
import { state, resetQuizState } from "../../src/state.js";
import * as api from "../../src/api.js";
import { startQuiz, selectAnswer } from "../../src/quiz.js";

vi.mock("../../src/renderer.js", () => ({
  renderApp: vi.fn(),
}));

describe("quiz logic", () => {
  beforeEach(() => {
    resetQuizState();
    state.status = "start";
  });

  it("startQuiz loads questions and switches to quiz state", async () => {
    vi.spyOn(api, "fetchQuestions").mockResolvedValue([
      {
        question: "Test?",
        answers: [
          { text: "A", correct: true },
          { text: "B", correct: false },
          { text: "C", correct: false },
          { text: "D", correct: false },
        ],
      },
    ]);

    await startQuiz();

    expect(state.status).toBe("quiz");
    expect(state.questions).toHaveLength(1);
    expect(state.currentQuestionIndex).toBe(0);
  });

  it("selectAnswer increments score if answer is correct", () => {
    state.status = "quiz";
    state.questions = [
      {
        question: "Test?",
        answers: [
          { text: "A", correct: true },
          { text: "B", correct: false },
          { text: "C", correct: false },
          { text: "D", correct: false },
        ],
      },
    ];

    selectAnswer(0);

    expect(state.score).toBe(1);
    expect(state.answerDisabled).toBe(true);
  });
});