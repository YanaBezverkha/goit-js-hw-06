function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('[type="number"]');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const boxEl = document.querySelector('#boxes')
let size = 20;


btnCreateEl.addEventListener('click', onCreate);
btnDestroyEl.addEventListener('click', onDestroy);

function onCreate(){
createBoxes(inputEl.value)
}

function onDestroy(){
boxEl.innerHTML = ''
inputEl.value = null;
size = 20;
}

function createBoxes(amount){
  for (let i = 0; i < amount; i++) {
  const box =  document.createElement('div');
  box.style.backgroundColor = getRandomHexColor();
  size += 10;
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  boxEl.append(box)
  }
}