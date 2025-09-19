document
  .getElementById("registerForm")
  .addEventListener("submit", function (dets) {
    dets.preventDefault();

    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const adminId = document.getElementById("adminId").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Password match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

     const usernameRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/;
    if (!usernameRegex.test(username)) {
      alert("Username must contain both letters and numbers!");
      return;
    }

    // Username exists
    if (localStorage.getItem("admin_" + username)) {
      alert("Username already exists!");
      return;
    }

    // Admin ID length
    if (adminId.length > 12) {
      alert("Admin Id should be under 12 numbers");
      return;
    }

    // Create admin user
    let user = {
      name: name,
      username: username,
      adminId: adminId,
      password: password,
    };

    // Save uniquely
    localStorage.setItem("admin_" + username, JSON.stringify(user));
    alert("Registration successful!");

    // Reset + redirect
    document.getElementById("registerForm").reset();
    window.location.href = "admin-log-in.html";
  });

// Password toggle
const toggleBtn = document.getElementById("toggleBtn");
const password = document.getElementById("password");
const toggleEye = document.querySelector(".toggleEye");

toggleBtn.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    toggleEye.src = "images/eye-close-up.png";
  } else {
    password.type = "password";
    toggleEye.src = "images/eye.png";
  }
});
