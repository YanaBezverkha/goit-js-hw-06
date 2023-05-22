const inputEl = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");

inputEl.addEventListener("input", changeName);

function changeName() {
  userName.textContent = inputEl.value;

  if (userName.textContent === "") {
    userName.textContent = "Anonymous";
  }
}
