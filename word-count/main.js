const calc = () => {
  const val = document.querySelector("#count-text").value;
  const word = val.split(" ");
  document.querySelector("#count-result").innerHTML = word.length;
};
