const loginForm = document.querySelector("#login-form");
const loginWrap = document.querySelector("#login-wrap");
const loginInput = document.querySelector("#login-input");
const todoWrap = document.querySelector("#wrap-to-hidden");
const sayHello = document.querySelector("#hello h1");
const logout = document.querySelector("#logout-button");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreeting(name) {
    todoWrap.classList.remove(HIDDEN_CLASSNAME);
    logout.classList.remove(HIDDEN_CLASSNAME);
    logout.addEventListener("click", onLogOut);
    sayHello.innerText = `Hello, ${name}!`;
}

function inputName(event) {
    event.preventDefault();
    loginWrap.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

function onLogOut(event) {
    event.preventDefault();
    localStorage.removeItem(USERNAME_KEY);

    loginWrap.classList.remove(HIDDEN_CLASSNAME);
    todoWrap.classList.add(HIDDEN_CLASSNAME);
    logout.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", inputName);
    sayHello.innerText = "Hello."
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginWrap.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", inputName);
} else {
    paintGreeting(savedUsername);
}