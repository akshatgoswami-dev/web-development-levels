let nm = document.querySelector("#name");
let pass = document.querySelector("#password");
let email = document.querySelector("#email");
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameError =  document.querySelector("#nameError")
  const passError = document.querySelector("#passwordError")
  const emailError = document.querySelector("#emailError")
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  let emailAns = emailRegex.test(email.value);
  let passAns = passwordRegex.test(pass.value);
 if (email.value.trim() === "") {
    emailError.textContent = "This field is required.";
    emailError.classList.remove("hidden");
}
else if (!emailAns) {
    emailError.textContent = "Email is incorrect";
    emailError.classList.remove("hidden");
}
else {
    emailError.classList.add("hidden");
}
  if (pass.value.trim() === " ") {
    
    passError.textContent = "This field is required.";
    
  } else if (!passAns) {
    passError.textContent =
      "Password must contain at least 8 characters, one uppercase letter, one lowercase letter and one number";
    passError.classList.remove("hidden");
  }
  else{
   passError.classList.add("hidden");
  }

  if (nm.value.trim() === "") {
    document.querySelector("#nameError").textContent =
      "This field is required.";
    document.querySelector("#nameError").classList.remove("hidden");
  } else {
    document.querySelector("#nameError").classList.add("hidden");
  }
});
