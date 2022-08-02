let result = 0;
const answers = localStorage.getItem("answers");
console.log(answers);

const obj = {};

const answersLoad = JSON.parse(answers);
console.log(answersLoad);
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
    const mainId = document.getElementById(questionId);
    console.log(mainId);
    console.log(`${questionId} : ${this.id}`);
    if (answersLoad[questionId] === this.id) {
      option.style.borderColor = "#00FF00";
      result += 2;
      console.log(result);
      setTimeout(() => {
        mainId.style.display = "none";
      }, 1000);
    } else {
      option.style.borderColor = "#FF0000";
      document.getElementById(answersLoad[questionId]).style.borderColor =
        "#00FF00";
      console.log(answersLoad);
      setTimeout(() => {
        mainId.style.display = "none";
      }, 1000);
    }
  });
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(result);
  const playerName = localStorage.getItem("players-name");
  console.log(playerName);

  obj[playerName] = result;
  console.log(obj);

  console.log(obj, "I am printing out");

  const answerDump = JSON.stringify(obj);
  localStorage.setItem("object", answerDump);

  window.location.href = "result.html";
});
console.log(hideQuestions);
