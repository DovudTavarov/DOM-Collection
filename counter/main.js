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
