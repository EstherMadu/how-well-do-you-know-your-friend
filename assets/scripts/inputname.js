import { storage } from "./storage.js";

console.log(window.location.href);
const params = new URLSearchParams(window.location.search);
const newId = params.get("id");

localStorage.setItem("unique-id", newId);
//newId = storage.uniqueId;

if (localStorage.getItem(getId) === "true") {
  window.location.href = "result.html";
}

const form = document.getElementById("form");
const submitBtn = document.getElementById("btn1");
const firstName = storage.firstName;
console.log(firstName);
const playerNameInput = document.getElementById("players-name");
// document.getElementById("user-name").textContent = firstName;

const doPost = async function (data) {
  // call function inside this function
  const request = await fetch(
    "https://intense-oasis-82033.herokuapp.com/get_answers",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const response = await request.json();
  return response;
};

doPost({
  challenge_id: newId,
})
  .then((result) => {
    console.log(result);
    console.log(result.owner_id);
    storage.firstName = result.owner_id;

    document.getElementById("user-name").textContent = result.owner_id;
    storage.answer = JSON.stringify(result.answers);
    //localStorage.setItem("challengeAnswers", JSON.stringify(result.answers));
  })
  .catch((err) => {
    console.log("It failed woefully" + err);
  });

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const playerName = playerNameInput.value;
  storage.playerName = playerName;
  console.log(playerName);

  window.location.href = "answerQuestions.html";
});

//  The link takes the user to result page
//and we want to move the table from success.js to where the unique link is generated.
//  Yes I did
//  Not really but I want the user to be able to see who has answered their uestions from just clicking the link
// Also the loading of the page is very very slow
// All of them I asked a couple of people to help me test and they didnt really enjoy the slow loading of the page
// If they dont have the link to the result page they wont see the result. and you know its not everyone that will do that.

// To do

//  Work on moving the table from result to sucess

//  When they come on the page if they have asked the questions direct them to result.js

//  Okay.
