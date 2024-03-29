import { storage } from "./storage.js";
import load from "./window_load.js";

const answers = {};
const firstName = storage.firstName;
const allFirstName = document.querySelectorAll("#first-name");
const options = document.querySelectorAll(".options");

allFirstName.textContent = firstName;

const doPost = async function (data) {
  // call function inside this function
  const request = await fetch(
    "https://intense-oasis-82033.herokuapp.com/set_answers",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const response = request.json();
  return response;
};

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

function handleSubmit() {
  console.log(answers);
  doPost({
    owner_id: firstName,
    answers: answers,
  })
    .then((result) => {
      console.log(result);
      localStorage.setItem(firstName, result.short_url);
      localStorage.setItem(result.short_url, true);
      window.location.href = "success.html";
    })
    .catch((err) => {
      console.log("It failed" + err);
    });
}

options.forEach((option) => {
  option.addEventListener("click", function () {
    const questionId = this.getAttribute("data-question-id");
    const currentQuestion = document.getElementById(`question-${questionId}`);
    const nextQuestion = document.getElementById(`question-${+questionId + 1}`);
    const answer = this.id;
    answers[questionId] = answer;
    this.style.border = "2px solid #00FF00";
    setTimeout(() => {
      currentQuestion.classList.remove("active");
      if (nextQuestion) nextQuestion.classList.add("active");
      else {
        handleSubmit();
      }
    }, 1000);
  });
});

load();
