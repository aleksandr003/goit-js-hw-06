const emailEl = document.querySelector('input[type="email"]');
const passwordEl = document.querySelector('input[type="password"]');
const btnSubmit = document.querySelector('input[type="submit"]');
const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  if (emailEl.value === "" && passwordEl.value === "") {
    return alert("Поля должны быть заполнены!");
  }

  const infoEmail = emailEl.value;
  const infoPassword = passwordEl.value;

  const user = {
    email: infoEmail,
    password: infoPassword,
  };
  return console.log(user);
});
