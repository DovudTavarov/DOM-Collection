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
