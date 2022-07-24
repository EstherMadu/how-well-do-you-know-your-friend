const form = document.getElementById("form");
console.log(form);
const firstName = document.getElementById("firstname");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstNameValue = firstName.value;
  localStorage.setItem("first-name", firstNameValue);

  window.location.href = "questions.html";
});
