let counterValue = document.getElementById("counterValue");
function onIncrement() {
  let previousCounterValue = counterValue.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) + 1;
  counterValue.textContent = updatedCounterValue;
  if (updatedCounterValue > 0) {
    counterValue.style.color = "Green";
  }
}
function onDecrement() {
  let previousCounterValue = counterValue.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) - 1;
  counterValue.textContent = updatedCounterValue;
  if (updatedCounterValue < 0) {
    counterValue.style.color = "Red";
  }
}
function onReset() {
  updatedCounterValue = 0;
  counterValue.textContent = updatedCounterValue;
  counterValue.style.color = "Black";
}
