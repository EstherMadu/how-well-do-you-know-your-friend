let result = 0;
const answers = localStorage.getItem("answers");
console.log(answers);
const answersLoad = JSON.parse(answers);
console.log(answersLoad);
const allFirstName = document.querySelectorAll("#first-name");
const firstName = localStorage.getItem("first-name");
console.log(firstName);

document.getElementById("first-name").textContent = firstName;
const submitBtn = document.getElementById("main-btn");
const options = document.querySelectorAll(".options");
const hideQuestions = document.querySelectorAll(".first-question");

allFirstName.forEach((allName) => {
  allName.textContent = firstName;
});

// options.forEach((option) => {
//   option.addEventListener("click", function () {
//     console.log(option);
//     const questionId = this.getAttribute("data-question-id");
//     console.log(`${questionId} : ${this.id}`);
//     if (answersLoad[questionId] === this.id) {
//       option.style.borderColor = "#00FF00";
//       option.style.display = "none";
//       result += 2;
//       console.log(result);
//     } else {
//       option.style.borderColor = "#FF0000";
//       document.getElementById(answersLoad[questionId]).style.borderColor =
//         "#00FF00";
//       option.style.display = "none";
//       console.log(answersLoad);
//     }
//   });
// });

hideQuestions.forEach((question) => {
  question.addEventListener("click", function () {
    question.style.display = "none";
    const questionId = this.getAttribute("data-question-id");
    console.log(`${questionId} : ${this.id}`);
    if (answersLoad[questionId] === this.id) {
      option.style.borderColor = "#00FF00";
      option.style.display = "none";
      result += 2;
      console.log(result);
    } else {
      option.style.borderColor = "#FF0000";
      document.getElementById(answersLoad[questionId]).style.borderColor =
        "#00FF00";
      option.style.display = "none";
      console.log(answersLoad);
    }
  });
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(result);
  window.location.href = "result.html";
});
console.log(hideQuestions);
