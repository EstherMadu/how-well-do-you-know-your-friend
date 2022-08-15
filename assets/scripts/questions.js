const answers = {};
const firstName = localStorage.getItem("first-name");
const allFirstName = document.querySelectorAll("#first-name");
const submitBtn = document.getElementById("main-btn");
const options = document.querySelectorAll(".options");
const hideQuestions = document.querySelectorAll(".first-question");
const form = document.getElementById("form");
document.querySelectorAll("#first-name").textContent = firstName;

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
  doPost({
    owner_id: firstName,
    answers: answers,
  })
    .then((result) => {
      console.log(result);
      localStorage.setItem(firstName, result.short_url);
      window.location.href = "success.html";
    })
    .catch((err) => {
      console.log("It failed" + err);
    });
  // const answerDump = JSON.stringify(answers);
  // localStorage.setItem("answers", JSON.stringify(answers));
});
