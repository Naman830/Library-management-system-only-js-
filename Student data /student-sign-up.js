document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const username = document.getElementById("username").value.trim();
    const studentid = document.getElementById("studentid").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Password match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Username must contain letters + numbers
    const usernameRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/;
    if (!usernameRegex.test(username)) {
      alert("Username must contain both letters and numbers!");
      return;
    }

    // Student ID must be numeric, up to 9 digits
    const studentIdRegex = /^[0-9]{1,9}$/;
    if (!studentIdRegex.test(studentid)) {
      alert("Student ID must be numbers only and under 9 digits!");
      return;
    }

    // Fetch existing users or create empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if username exists
    if (users.some((u) => u.username === username)) {
      alert("Username already exists!");
      return;
    }

    // Create user object
    let user = {
      role: "student", // useful later for filtering
      name: name,
      username: username,
      studentid: studentid,
      password: password,
    };

    // Save user to array
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");

    document.getElementById("registerForm").reset();
    window.location.href = "student-log-in.html";
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
