const playersName = localStorage.getItem("players-name");

const playerName = document.getElementById("input-name");

playerName.textContent = localStorage.getItem("players-name");

const playerScore = document.getElementById("score");
playerScore.textContent = localStorage.getItem("result-score");

const playerResult = localStorage.getItem("object");
const resultLoad = JSON.parse(playerResult);
console.log(resultLoad);
