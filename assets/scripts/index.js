import { storage } from "./storage.js";

const form = document.getElementById("form");
console.log(form);
const firstNameInput = document.getElementById("firstname");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = firstNameInput.value;
  // localStorage.setItem("first-name", firstNameValue);
  storage.firstName = firstName;
  console.log("set", storage);
  console.log(storage.esther);

  window.location.href = "questions.html";
});
