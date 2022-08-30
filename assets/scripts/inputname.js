import { storage } from "./storage.js";

console.log(window.location.href);
const params = new URLSearchParams(window.location.search);
const newId = params.get("id");

localStorage.setItem("unique-id", newId);
//newId = storage.uniqueId;

if (localStorage.getItem("hasAnswered") === "true") {
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
