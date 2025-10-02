function checkAnswer() {
  let correctAnswer = "4";

  const userAnswer = document.querySelector("input[name='quiz']:checked");

  if (userAnswer.value === correctAnswer) {
    const feedback = (document.getElementById("feedback").textContent =
      "Correct! Well done.");
  } else {
    const feedback = (document.getElementById("feedback").textContent =
      "That's incorrect. Try again!");
  }
}
const submitButton = document.getElementById("submit-answer");

submitButton.addEventListener("click", checkAnswer);
