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
