function selectRole() {
  let admin = document.getElementById("admin-role");
  let student = document.getElementById("student-role");

  if (!admin || !student) return;

  admin.addEventListener("click", function () {
    localStorage.setItem("role", "admin");
    window.location.href = "../Admin data/admin-sign-up.html";
  });

  student.addEventListener("click", function () {
    localStorage.setItem("role", "student");
    window.location.href = "../Student data /student-sign-up.html";
  });
}

document.addEventListener("DOMContentLoaded", selectRole);
