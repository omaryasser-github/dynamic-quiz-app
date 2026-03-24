import { shuffleArray } from "./utils.js";

export async function fetchQuestions() {
  try {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
    );

    const data = await response.json();

    // Transform the API data into the required format
    const formattedQuestions = data.results.map((item) => {
      const answers = [
        ...item.incorrect_answers.map((ans) => ({
          text: decodeHTML(ans),
          correct: false,
        })),
        {
          text: decodeHTML(item.correct_answer),
          correct: true,
        },
      ];

      return {
        question: decodeHTML(item.question),
        answers: shuffleArray(answers),
      };
    });

    return formattedQuestions;
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
}

function decodeHTML(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}