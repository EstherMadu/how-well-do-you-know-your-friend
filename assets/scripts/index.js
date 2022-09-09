import { storage } from "./storage.js";
import load from "./window_load.js";

const form = document.getElementById("form");
console.log(form);
const firstNameInput = document.getElementById("firstname");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = firstNameInput.value;
  storage.firstName = firstName;
  window.location.href = "questions.html";
});

load();
