import { storage } from "./storage.js";
import load from "./window_load.js";
const firstName = storage.firstName;
const shortUrl = localStorage.getItem(firstName);
const pu = window.location.origin + "/" + "inputname.html?" + "id=" + shortUrl;
console.log(shortUrl, firstName);
const urlBtn = document.getElementById("url-btn");
const uniqueUrl = document.getElementById("url");

uniqueUrl.value = pu;

urlBtn.addEventListener("click", function () {
  let copyText = document.getElementById("url");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
});

//  For Table

const playersName = localStorage.getItem("players-name");

const table = document.getElementById("table");
console.log(table);

const playerName = document.getElementById("input-name");

const playerScore = document.getElementById("score");
const newPlayerBtn = document.getElementById("play-btn");

const newId = localStorage.getItem("unique-id");

fetch("https://intense-oasis-82033.herokuapp.com/get_scoreboard/" + shortUrl, {
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
      document.getElementById("user-name").textContent = firstName;
    }
  })
  .catch((err) => console.log(err));

load();
