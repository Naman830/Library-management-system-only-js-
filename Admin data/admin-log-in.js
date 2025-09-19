document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const usernameOrId = document.getElementById("usernameOrId").value.trim();
  const password = document.getElementById("password").value.trim();

  let users = JSON.parse(localStorage.getItem("users") || "[]");


  let admin = admins.find(function (u) {
    return u.username === usernameOrId || u.adminId === usernameOrId;
  });
  if(!admin){
        alert("Username or Admin ID is incorrect. Please enter valid details.");
    return;
  }

    if (admin.password !== password) {
    alert("Password is incorrect!");
    return;
  }

  alert("You have successfully logged in!");


  localStorage.setItem("user", JSON.stringify(admin));
  window.location.href = "admin-dashboard.html";
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

