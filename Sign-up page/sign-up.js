const passwordInput = document.getElementById("password");
const toggleBtn = document.getElementById("toggleBtn");
const toggleIcon = document.getElementById("toggleIcon");

toggleBtn.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.src = "images/eye-closed.png"; // 👁️ closed eye image
    toggleIcon.alt = "Hide Password";
  } else {
    passwordInput.type = "password";
    toggleIcon.src = "images/eye-open.png"; // 👁️ open eye image
    toggleIcon.alt = "Show Password";
  }
});
