console.log(window.location.href);
const params = new URLSearchParams(window.location.search);
const newId = params.get("id");
console.log(newId);

const form = document.getElementById("form");
const submitBtn = document.getElementById("btn1");
const firstName = localStorage.getItem("first-name");
console.log(firstName);
const playerName = document.getElementById("players-name");
document.getElementById("user-name").textContent = firstName;

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
  const response = request.json();
  return response;
};

doPost({
  challenge_id: newId,
})
  .then((result) => {
    console.log(result);
    console.log(result.answers);

    localStorage.setItem("challengeAnswers", JSON.stringify(result.answers));
  })
  .catch((err) => {
    console.log("It failed woefully" + err);
  });

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const playerNameValue = playerName.value;
  console.log(playerNameValue);

  localStorage.setItem("players-name", playerNameValue);

  window.location.href = "answerQuestions.html";
});
