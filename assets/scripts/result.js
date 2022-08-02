const playersName = localStorage.getItem("players-name");

const playerName = document.getElementById("input-name");

playerName.textContent = localStorage.getItem("players-name");

const playerScore = document.getElementById("score");
playerScore.textContent = localStorage.getItem("result-score");

const tableRow = function () {
  let table = document.getElementById("table");

  let row = table.insertRow(0);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  cell1.innerHTML = playerNameValue;
  cell2.innerHTML = "NEW CELL2";
};

// submitBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   window.location.href = "result.html";
//   localStorage.setItem("players-name", playersName);
// });

// submitBtn.addEventListener("click", function () {
//   let table = document.getElementById("table");
//   let row = table.insertRow(0);
//   let cell1 = row.insertCell(0);
//   let cell2 = row.insertCell(1);
//   cell1.innerHTML = "NEW CELL1";
//   cell2.innerHTML = "NEW CELL2";
// });
