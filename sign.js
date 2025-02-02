
  const form = document.getElementById("form");
  const passwordInput = document.getElementById("pass");
  const confirmPasswordInput = document.getElementById("passA");
  const togglePasswordIcon = document.querySelector(".pass i");
  const showSpan = document.querySelector(".pass .show");

  togglePasswordIcon.addEventListener("click", () => {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    confirmPasswordInput.type = type;

    showSpan.classList.toggle("show");
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const userName = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    const state = true;

    if (password !== confirmPassword) {
      passwordInput.style.border = "2px solid red";
      confirmPasswordInput.style.border = "2px solid red";
      state = false;
    }
    if (state) window.location.href = "home.html";
  });

