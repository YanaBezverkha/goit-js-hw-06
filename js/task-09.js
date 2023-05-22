function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnEl = document.querySelector(".change-color");
const colorSpanEl = document.querySelector(".color");
const body = document.querySelector("body");

btnEl.addEventListener("click", onChangeColor);

function onChangeColor() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorSpanEl.textContent = randomColor;
}
