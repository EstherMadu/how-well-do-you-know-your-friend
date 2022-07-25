const form = document.getElementById("form");
const submitBtn = document.getElementById("btn1");
const firstName = localStorage.getItem("first-name");
console.log(firstName);

document.getElementById("user-name").textContent = firstName;

submitBtn.addEventListener("click", function (e) {
  const firstNameValue = firstName.value;
  localStorage.setItem("first-name", firstNameValue);

  e.preventDefault();
  window.location.href = "";
});

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const firstNameValue = firstName.value;
//   localStorage.setItem("first-name", firstNameValue);

//   window.location.href = "questions.html";
// });
