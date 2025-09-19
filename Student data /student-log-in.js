document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const usernameOrId = document.getElementById("usernameOrId").value.trim();
  const password = document.getElementById("password").value.trim();

  // Fetch users
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Find user by username or studentid
  let user = users.find(function (u) {
    return u.username === usernameOrId || u.studentid === usernameOrId;
  });

  if (!user) {
    alert("Username or Student ID is incorrect. Please enter valid details.");
    return;
  }

  if (user.password !== password) {
    alert("Password is incorrect!");
    return;
  }

  alert("You have successfully logged in!");

  // Save current session
  localStorage.setItem("user", JSON.stringify(user));

  // Redirect depending on role
  if (user.role === "admin") {
    window.location.href = "admin-dashboard.html";
  } else {
    window.location.href = "student-home.html";
  }

  document.getElementById("loginForm").reset();
});

const toggleBtn = document.getElementById("toggleBtn");
const passwordInput = document.getElementById("password");
const toggleIcon = toggleBtn.querySelector("img"); // Get the img inside the button

toggleBtn.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.src = "../images/eye-open.png"; // corrected path
  } else {
    passwordInput.type = "password";
    toggleIcon.src = "../images/eye-close.png"; // corrected path
  }
});
