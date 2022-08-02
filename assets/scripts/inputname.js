const form = document.getElementById("form");
const submitBtn = document.getElementById("btn1");
const firstName = localStorage.getItem("first-name");
console.log(firstName);
const playerName = document.getElementById("players-name");
document.getElementById("user-name").textContent = firstName;

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const playerNameValue = playerName.value;
  console.log(playerNameValue);
  localStorage.setItem("players-name", playerNameValue);

  window.location.href = "answerQuestions.html";
});
