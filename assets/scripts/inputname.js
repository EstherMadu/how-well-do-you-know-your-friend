const form = document.getElementById("form");
const submitBtn = document.getElementById("btn1");

submitBtn.addEventListener("click", function (e) {
  const firstNameValue = firstName.value;
  localStorage.setItem("first-name", firstNameValue);

  e.preventDefault();
  window.location.href = "answerQuestions.html";
});

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const firstNameValue = firstName.value;
//   localStorage.setItem("first-name", firstNameValue);

//   window.location.href = "questions.html";
// });
