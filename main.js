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

/* Counter */

const decrease = () => {
  const curNum = Number(document.querySelector("#counter-result").innerHTML);
  document.querySelector("#counter-result").innerHTML = curNum - 1;
};

const increase = () => {
  const curNum = Number(document.querySelector("#counter-result").innerHTML);
  document.querySelector("#counter-result").innerHTML = curNum + 1;
};

const reset = () => {
  document.querySelector("#counter-result").innerHTML = 0;
};

/* Voting System */

const votingBtn = document.getElementById("voting-btn");
const votingCount = document.getElementById("voting-count");
let counter = 0;
votingBtn.addEventListener("click", function () {
  counter++;
  votingCount.innerHTML = counter;
});

const votingBtn2 = document.getElementById("voting-btn2");
const votingCount2 = document.getElementById("voting-count2");
let counter2 = 0;
votingBtn2.addEventListener("click", function () {
  counter2++;
  votingCount2.innerHTML = counter2;
});

const votingBtn3 = document.getElementById("voting-btn3");
const votingCount3 = document.getElementById("voting-count3");
let counter3 = 0;
votingBtn3.addEventListener("click", function () {
  counter3++;
  votingCount3.innerHTML = counter3;
});

/* Todo List */

const todoText = document.getElementById("todo-text");
const todoSub = document.getElementById("todo-submit");
const todoList = document.getElementById("todo-list");
const todoClear = document.getElementById("todo-clear");

todoSub.addEventListener("click", function onSub() {
  todoList.innerHTML += `<li>${todoText.value}</li>`;
  todoText.value = "";
});

todoClear.addEventListener("click", function () {
  todoList.innerHTML = "";
});

/* Toggle password*/

const passwordText = document.getElementById("password");
const showPassword = document.getElementById("show-pas");

showPassword.addEventListener("click", function () {
  if (showPassword.checked === true) {
    passwordText.setAttribute("type", "text");
  } else {
    passwordText.setAttribute("type", "password");
  }
});
