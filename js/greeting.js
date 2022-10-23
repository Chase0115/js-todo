const loginForm = document.getElementById('login-form');
const loginInput = loginForm.querySelector('#login-form input');
const title = document.getElementById('greeting');
const logoutBtn = document.getElementById('logout');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreetings(userName) {
  title.innerText = `Hello ${userName}!`;
  title.classList.remove(HIDDEN_CLASSNAME);
  logoutBtn.classList.remove(HIDDEN_CLASSNAME)
}


function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);

  const userName = loginInput.value;
  paintGreetings(userName)
  localStorage.setItem(USERNAME_KEY, userName);
}


function onLogout() {
  localStorage.removeItem(USERNAME_KEY);
  window.location.reload()
}

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  title.innerText = `Hello ${savedUsername}!`;
  paintGreetings(savedUsername)
  
}

logoutBtn.addEventListener('click', onLogout);
