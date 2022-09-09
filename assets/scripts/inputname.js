import { storage } from "./storage.js";
import load from "./window_load.js";

const params = new URLSearchParams(window.location.search);
const newId = params.get("id");

localStorage.setItem("unique-id", newId);

console.log(newId, localStorage.getItem(newId));
if (localStorage.getItem(newId) === "true") {
  window.location.href = "success.html";
}

const submitBtn = document.getElementById("btn1");
const firstName = storage.firstName;
console.log(firstName);
const playerNameInput = document.getElementById("players-name");

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
  })
  .catch((err) => {
    console.log("It failed woefully" + err);
  });

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const playerName = playerNameInput.value;
  storage.playerName = playerName;
  window.location.href = "answerQuestions.html";
});

load();
