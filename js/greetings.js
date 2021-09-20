
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const GREETING_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit (event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(GREETING_CLASSNAME);
    paintGreeting(username);
}

function paintGreeting (username) {
    greeting.innerText = `Welcome ${username}!`;
    greeting.classList.remove(GREETING_CLASSNAME);
}



const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null ) {
    loginForm.classList.remove(GREETING_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(savedUsername);
}