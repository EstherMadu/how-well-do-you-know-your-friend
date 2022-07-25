const firstName = localStorage.getItem("first-name");
const pu = window.location.origin + "/" + "inputname.html?" + "id=" + firstName;
const urlBtn = document.getElementById("url-btn");
const uniqueUrl = document.getElementById("url");

uniqueUrl.value = pu;

urlBtn.addEventListener("click", function () {
  let copyText = document.getElementById("url");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
});
