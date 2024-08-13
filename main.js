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

const calc = () => {
  const val = document.querySelector("#count-text").value;
  const word = val.split(" ");
  document.querySelector("#count-result").innerHTML = word.length;
};

/* Tip Calculator */
const submit = () => {
  const bill = Number(document.querySelector("#amount").value);
  const tip = Number(document.querySelector("#tip").value);
  const people = Number(document.querySelector("#people").value);
  let total = (bill * tip) / people;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  document.querySelector(
    "#totalTip"
  ).innerHTML = `<h5>TIP AMOUNT</h5><div>${total}$</div><h5>each</h5>`;
};
