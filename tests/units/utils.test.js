import { describe, it, expect } from "vitest";
import {
  getResultMessage,
  shuffleArray,
  validateQuestion,
  calculateProgress,
} from "../../src/utils.js";

describe("getResultMessage", () => {
  it("returns perfect message for 100%", () => {
    expect(getResultMessage(100)).toBe("Perfect! You're a genius!");
  });

  it("returns great message for 80%", () => {
    expect(getResultMessage(80)).toBe("Great job! You know your stuff!");
  });

  it("returns fallback message for low score", () => {
    expect(getResultMessage(20)).toBe("Keep studying! You'll get better!");
  });
});

describe("shuffleArray", () => {
  it("returns array with same length", () => {
    const arr = [1, 2, 3, 4];
    const shuffled = shuffleArray(arr);
    expect(shuffled).toHaveLength(arr.length);
  });

  it("does not lose elements", () => {
    const arr = [1, 2, 3, 4];
    const shuffled = shuffleArray(arr);
    expect(shuffled.sort()).toEqual(arr.sort());
  });
});

describe("validateQuestion", () => {
  it("returns true for valid question", () => {
    const question = {
      question: "Test?",
      answers: [
        { text: "A", correct: true },
        { text: "B", correct: false },
        { text: "C", correct: false },
        { text: "D", correct: false },
      ],
    };

    expect(validateQuestion(question)).toBe(true);
  });

  it("returns false if answers are not 4", () => {
    const question = {
      question: "Test?",
      answers: [{ text: "A", correct: true }],
    };

    expect(validateQuestion(question)).toBe(false);
  });
});

describe("calculateProgress", () => {
  it("calculates correct percentage", () => {
    expect(calculateProgress(0, 5)).toBe(20);
    expect(calculateProgress(4, 5)).toBe(100);
  });
});