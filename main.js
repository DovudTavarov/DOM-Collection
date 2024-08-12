/*  Light switch  */

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

/* Pass a Message */

const onSubmit = () => {
  const val = document.querySelector("#text").value;
  if (val.length > 0) {
    document.querySelector("#result").innerHTML = val.toUpperCase();
    document.querySelector("#text").value = "";
  }
};

document.querySelector("#text").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    onSubmit();
  }
});

/* Word Count */
