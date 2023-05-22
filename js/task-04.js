const btnDecr = document.querySelector('button[data-action="decrement"]');
const btnIncr = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

btnDecr.addEventListener("click", onDecr);
btnIncr.addEventListener("click", onIncr);

function onDecr() {
  counterValue -= 1;
  document.querySelector("#value").textContent = `${counterValue}`;
}

function onIncr() {
  counterValue += 1;
  document.querySelector("#value").textContent = `${counterValue}`;
}
