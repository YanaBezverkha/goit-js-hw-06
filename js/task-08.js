const formEl = document.querySelector(".login-form");
const {email, password} = formEl

formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  if (email.value === "" || password.value === "") {
   return alert("Всі поля повинні бути заповнені.");
  }

  const inputValue = {
    [email.name]: email.value,
    [password.name]: password.value,
  };
  console.log(inputValue);
  formEl.reset();
}
