import { storage } from "./storage.js";
import load from "./window_load.js";

const firstName = storage.firstName;
const shortUrl = localStorage.getItem(firstName);
const pu = window.location.origin + "/" + "inputname.html?" + "id=" + shortUrl;
console.log(pu);
// console.log(shortUrl, firstName);
const urlBtn = document.getElementById("url-btn");
const uniqueUrl = document.getElementById("url");
uniqueUrl.value = pu;
const table = document.getElementById("table");
console.log(table);
let copyText = document.getElementById("url");
console.log(copyText);
const whatsApp = document.getElementById("whatsapp-btn");

urlBtn.addEventListener("click", function () {
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
});

fetch("https://intense-oasis-82033.herokuapp.com/get_scoreboard/" + shortUrl, {
  method: "GET",
})
  .then((result) => result.json())
  .then((data) => {
    console.log(data);
    const results = data.results;
    for (const index in results) {
      const playerResult = results[index];

      console.log(playerResult);
      for (const key in playerResult) {
        console.log(key);
        let row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.textContent = key;
        cell2.textContent = playerResult[key];
        console.log(`${key}: ${playerResult[key]}`);
      }
    }
  })
  .catch((err) => console.log(err));

load();

whatsApp.addEventListener("click", function () {
  let message = pu;

  window.open(
    "whatsapp://send?text= Please use this link to answer some questions to see how well you know " +
      `${firstName}` +
      " 😃🤪😂" +
      "                                                 " +
      message,

    "_blank"
  );
});
