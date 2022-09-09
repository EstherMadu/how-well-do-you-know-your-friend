import { storage } from "./storage.js";
import load from "./window_load.js";

const getId = localStorage.getItem("unique-id");
console.log(getId);

let result = 0;
const answers = storage.answer;

console.log(answers);
if (localStorage.getItem(getId) === "true") {
  window.location.href = "result.html";
}

const answersLoad = JSON.parse(answers);
console.log(answersLoad);

const allFirstName = document.querySelectorAll("#first-name");
const firstName = storage.firstName;

console.log(firstName);

document.getElementById("first-name").textContent = firstName;

const options = document.querySelectorAll(".options");

const postResult = async function (data) {
  const apiResult = await fetch(
    "https://intense-oasis-82033.herokuapp.com/set_score",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const response = await apiResult.json();
  return response;
};

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
  console.log(getId);

  postResult({
    result: result,
    player_name: playerName,
    challenge_id: getId,
  })
    .then((result) => {
      console.log(result);
      localStorage.setItem(getId, true);
      window.location.href = "result.html";
    })
    .catch((err) => {
      console.log(err);
    });
}

load();
