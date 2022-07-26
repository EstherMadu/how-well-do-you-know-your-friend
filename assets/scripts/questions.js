const answers = {};
const firstName = localStorage.getItem("first-name");
const allFirstName = document.querySelectorAll("#first-name");
const submitBtn = document.getElementById("main-btn");
const options = document.querySelectorAll(".options");
const hideQuestions = document.querySelectorAll(".first-question");
const form = document.getElementById("form");
document.querySelectorAll("#first-name").textContent = firstName;

allFirstName.forEach((allName) => {
  allName.textContent = firstName;
});

const delayLoop = (fn, delay) => {
  return (option, i) => {
    setTimeout(() => {
      fn(option);
    }, i * 2000);
  };
};

options.forEach((option) => {
  option.addEventListener("click", function () {
    const questionId = this.getAttribute("data-question-id");
    console.log(questionId);

    const mainId = document.getElementById(questionId);
    console.log(mainId);
    const answerId = this.id;

    console.log(answerId);
    answers[questionId] = answerId;
    option.style.borderColor = "green";
    setTimeout(() => {
      mainId.style.display = "none";
    }, 1000);
  });
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(answers);
  const answerDump = JSON.stringify(answers);
  localStorage.setItem("answers", JSON.stringify(answers));
  window.location.href = "success.html";
});
