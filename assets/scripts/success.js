import { storage } from "./storage.js";

// const firstName = localStorage.getItem("first-name");
const firstName = storage.firstName;
const shortUrl = localStorage.getItem(firstName);
const pu = window.location.origin + "/" + "inputname.html?" + "id=" + shortUrl;
const urlBtn = document.getElementById("url-btn");
const uniqueUrl = document.getElementById("url");

uniqueUrl.value = pu;

urlBtn.addEventListener("click", function () {
  let copyText = document.getElementById("url");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
});

// localStorage.setItem('floor', 2);
// localStorage.getItem('floor');
