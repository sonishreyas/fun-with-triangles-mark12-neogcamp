const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-answer-btn");
const output = document.querySelector("#output");

const correctAnswers = [
  "90°",
  "right angled",
  "Equilateral",
  "Two sides are equal",
  "The length of all sides laid end to end",
];

const calculateScore = () => {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score += 1;
    }
    index += 1;
  }
  output.innerText = `Your score is ${score}`;
};

submitButton.addEventListener("click", calculateScore);
