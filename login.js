// Function to stop forward when user came back to login

function stopOnForward() {
  history.pushState(null, null, location.href);
  window.onpopstate = function () {
    history.go(1);
  };
}
window.onload = stopOnForward();
// Function to show the signup form
function showSignup() {
  document.getElementById("login-container").style.display = "none";
  document.getElementById("signup-container").style.display = "block";
}

// Function to show the login form
function showLogin() {
  document.getElementById("signup-container").style.display = "none";
  document.getElementById("login-container").style.display = "block";
}

// Function to handle login
function handleLogin(username, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password");
  }
}

// Function to handle signup
function handleSignup(firstName, lastName, username, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const newUser = { firstName, lastName, username, password };
  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));
  alert("Signup successful. Please login.");
  showLogin(); // Automatically switch to the login form after successful signup
}

// Event listener for the login form
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  handleLogin(username, password);
});

// Event listener for the signup form
document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const username = document.getElementById("newUsername").value;
  const password = document.getElementById("newPassword").value;
  handleSignup(firstName, lastName, username, password);
});
