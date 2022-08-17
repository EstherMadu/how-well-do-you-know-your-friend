let result = 0;
const answers = localStorage.getItem("challengeAnswers");
console.log(answers);

const obj = {};

const answersLoad = JSON.parse(answers);
console.log(answersLoad);

// const newAnswersLoad = JSON.stringify(answersLoad);
// console.log(newAnswersLoad);

const allFirstName = document.querySelectorAll("#first-name");
const firstName = localStorage.getItem("first-name");
console.log(firstName);

document.getElementById("first-name").textContent = firstName;

const submitBtn = document.getElementById("main-btn");
const options = document.querySelectorAll(".options");
const hideQuestions = document.querySelectorAll(".first-question");
console.log(hideQuestions);

allFirstName.forEach((allName) => {
  allName.textContent = firstName;
});

options.forEach((option) => {
  option.addEventListener("click", function () {
    console.log(option);
    const questionId = this.getAttribute("data-question-id");
    const currentQuestion = document.getElementById(`question-${questionId}`);
    const nextQuestion = document.getElementById(`question-${+questionId + 1}`);
    console.log(currentQuestion);
    console.log(`${questionId} : ${this.id}`);
    if (answersLoad[questionId] === this.id) {
      this.style.border = "2px solid #00FF00";
      result += 2;
      console.log(result);
    } else {
      document.getElementById(answersLoad[questionId]).style.borderColor =
        "#00FF00";
      this.style.border = "2px solid red";
      option.classList.add("shake");
      console.log(answersLoad);
    }
    setTimeout(() => {
      currentQuestion.style.display = "none";
      currentQuestion.classList.remove("active");
      if (nextQuestion) nextQuestion.classList.add("active");
      else {
        handleSubmit();
      }
    }, 1000);
  });
});

function handleSubmit() {
  console.log(result);
  const playerName = localStorage.getItem("players-name");
  const answerObj = localStorage.getItem("scoreboard");
  // console.log(answerObj);
  let newestObj = {};
  if (answerObj === null) {
    newestObj[playerName] = result;
    console.log(newestObj, "I am newest object");
  } else {
    newestObj = JSON.parse(answerObj);
    console.log(newestObj);
    newestObj[playerName] = result;
  }

  const answerDump = JSON.stringify(newestObj);
  localStorage.setItem("scoreboard", answerDump);
  console.log(answerDump);

  window.location.href = "result.html";
}
