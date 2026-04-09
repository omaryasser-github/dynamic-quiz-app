import { describe, it, expect } from "vitest";
import { formatQuestions } from "../../src/utils.js";

describe("formatQuestions", () => {
  it("formats OpenTDB question correctly", () => {
    const rawData = [
      {
        question: "What is 2 + 2?",
        correct_answer: "4",
        incorrect_answers: ["1", "2", "3"],
      },
    ];

    const result = formatQuestions(rawData);

    expect(result).toHaveLength(1);
    expect(result[0].question).toBe("What is 2 + 2?");
    expect(result[0].answers).toHaveLength(4);
    expect(result[0].answers.filter((a) => a.correct)).toHaveLength(1);
  });
});