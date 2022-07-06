function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const textColorEl = document.querySelector(".color");
const buttonEl = document.querySelector(".change-color");

const changColor = function () {
  textColorEl.innerHTML = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
};
buttonEl.addEventListener("click", changColor);
