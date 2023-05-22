const formEl = document.querySelector(".login-form");
const inputEmailEl = document.querySelector('[name="email"]');
const inputPasswordEl = document.querySelector('[name="password"]');

formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  if (inputEmailEl.value === "" || inputPasswordEl.value === "") {
   return alert("Всі поля повинні бути заповнені.");
  }

  const inputValue = {
    [formEl.elements.email.name]: formEl.elements.email.value,
    [formEl.elements.password.name]: formEl.elements.password.value,
  };
  console.log(inputValue);
  formEl.reset();
}
