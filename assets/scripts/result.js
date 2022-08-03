const playersName = localStorage.getItem("players-name");

const table = document.getElementById("table");
console.log(table);

const playerName = document.getElementById("input-name");

// playerName.textContent = localStorage.getItem("players-name");

const playerScore = document.getElementById("score");
// playerScore.textContent = localStorage.getItem("result-score");

const playerResult = localStorage.getItem("object");
const resultLoad = JSON.parse(playerResult);
console.log(resultLoad);

let row = table.insertRow(1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
cell1.textContent = "check";
cell2.textContent = "check";
