const btnDecrementEl = document.querySelector(
  'button[data-action="decrement"]'
);
const btnIncrementEl = document.querySelector(
  'button[data-action="increment"]'
);
const valueEl = document.querySelector("#value");
let counterValue = 0;

const addOneNumber = function () {
  counterValue += 1;
  valueEl.textContent = counterValue;
};
const removeOneNumber = function () {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

btnIncrementEl.addEventListener("click", addOneNumber);
btnDecrementEl.addEventListener("click", removeOneNumber);
