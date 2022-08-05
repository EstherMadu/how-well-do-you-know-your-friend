const playersName = localStorage.getItem("players-name");

const table = document.getElementById("table");
console.log(table);

const playerName = document.getElementById("input-name");

const playerScore = document.getElementById("score");

const playerResult = localStorage.getItem("scoreboard");
console.log(playerResult);
const resultLoad = JSON.parse(playerResult);
// console.log(resultLoad);

// Loop through result load to retrieve key and value

for (const key in resultLoad) {
  // print out name key and value
  let row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.textContent = `${key}`;
  cell2.textContent = `${resultLoad[key]}`;
  console.log(`${key}: ${resultLoad[key]}`);
}

//check if object exists in local storage
// if it does load it
