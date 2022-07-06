function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("#controls input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");
const NumEl = Number(inputEl.value);

const addElemDiv = function () {
  const arr = [];
  for (let i = 0; i < NumEl; i += 1) {
    const newElem = document.createElement("div");
    let numX = 30;
    newElem.style.width = numX + "px";
    newElem.style.height = numX + "px";
    newElem.style.color = getRandomHexColor();
    numX += 10;
  }
  arr[i] = newElem;
  console.log(arr);
  return boxesEl.append(arr);
};
btnCreate.addEventListener("click", addElemDiv);
