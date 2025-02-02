document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

        window.location.href = 'home.html'; 
    
});


const form = document.getElementById("form");
const passwordInput = document.getElementById("pass");
const togglePasswordIcon = document.querySelector(".pass i");
const showSpan = document.querySelector(".pass .show");

togglePasswordIcon.addEventListener("click", () => {
  const type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = type;
  showSpan.classList.toggle("show");
});