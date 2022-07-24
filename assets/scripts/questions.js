const answers = {};
const firstName = localStorage.getItem("first-name");
console.log(firstName);
const allFirstName = document.querySelectorAll("#first-name");
const submitBtn = document.getElementById("main-btn");
const options = document.querySelectorAll(".options");
const hideQuestions = document.querySelectorAll(".first-question");
const form = document.getElementById("form");
document.querySelectorAll("#first-name").textContent = firstName;

allFirstName.forEach((allName) => {
  allName.textContent = firstName;
});

options.forEach((option) => {
  option.addEventListener("click", function () {
    const questionId = this.getAttribute("data-question-id");
    const answerId = this.id;
    answers[questionId] = answerId;
    // option.style.borderColor = "green";
  });
});
hideQuestions.forEach((question) => {
  question.addEventListener("click", function () {
    question.style.display = "none";
  });
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(answers);
  const answerDump = JSON.stringify(answers);
  localStorage.setItem("answers", JSON.stringify(answers));
  window.location.href = "success.html";
});
