document.getElementById("img").addEventListener("click", function () {
  if (
    document.getElementById("img").src ===
    "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png"
  ) {
    document.getElementById("img").src =
      "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png";
  } else {
    document.getElementById("img").src =
      "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png";
  }
});
