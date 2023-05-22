

const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', onChangeSize);

function onChangeSize(){
    textEl.style.fontSize = `${inputEl.value}px`
}
