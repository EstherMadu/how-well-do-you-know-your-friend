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

// By tomorrow confirm that Jaosn has cleared the database
// Clear local storage and run the code form beginning ad see it work
// For my table make sure ure using result.result to call the value
// The table I have below I will move it into the .then where I have console.log(data) because I want populate the table in the htl with the information on the data.
//  where I have result load, resultLoad should be equalt to data.result, for it to work properly I have to move all the table to the .then so it works properly.
