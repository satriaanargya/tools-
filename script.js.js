// file: script.js
document.querySelector("form").addEventListener("submit", function(e) {
  const user = document.querySelector("[name='username']").value;
  const pass = document.querySelector("[name='password']").value;

  if (user.length < 3) {
    alert("Username minimal 3 karakter!");
    e.preventDefault();
  }
});
