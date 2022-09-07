import load from "./window_load.js";

const playersName = localStorage.getItem("players-name");

const table = document.getElementById("table");
console.log(table);

const playerName = document.getElementById("input-name");

const playerScore = document.getElementById("score");
const newPlayerBtn = document.getElementById("play-btn");

const newId = localStorage.getItem("unique-id");

fetch("https://intense-oasis-82033.herokuapp.com/get_scoreboard/" + newId, {
  method: "GET",
})
  .then((result) => result.json())
  .then((data) => {
    console.log(data);
    const playerResult = data.results;
    console.log(playerResult);
    for (const key in playerResult) {
      let row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.textContent = key;
      cell2.textContent = playerResult[key];
      console.log(`${key}: ${playerResult[key]}`);
    }
  })
  .catch((err) => console.log(err));

// Loop through result load to retrieve key and value

newPlayerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "index.html";
});

load();
