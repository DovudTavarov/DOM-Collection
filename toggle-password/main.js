const passwordText = document.getElementById("password");
const showPassword = document.getElementById("show-pas");

showPassword.addEventListener("click", function () {
  if (showPassword.checked === true) {
    passwordText.setAttribute("type", "text");
  } else {
    passwordText.setAttribute("type", "password");
  }
});
