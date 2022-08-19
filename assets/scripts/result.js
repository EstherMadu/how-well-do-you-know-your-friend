const playersName = localStorage.getItem("players-name");

const table = document.getElementById("table");
console.log(table);

const playerName = document.getElementById("input-name");

const playerScore = document.getElementById("score");
const newPlayerBtn = document.getElementById("play-btn");

const playerResult = localStorage.getItem("scoreboard");
console.log(playerResult);
const resultLoad = JSON.parse(playerResult);
const newId = localStorage.getItem("unique-id");
// console.log(resultLoad);

const doGet = async function (id) {
  const apiResult = await fetch(
    "https://intense-oasis-82033.herokuapp.com/get_scoreboard/" + id,
    {
      method: "GET",
    }
  );
  console.log(apiResult, "imabbbbefoore" + 4);
  const response = apiResult.json();
  return response;
};

doGet(newId)
  .then((result) => {
    console.log("This is the" + result);
  })
  .catch((err) => {
    console.log(err);
  });

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

newPlayerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "index.html";
});
