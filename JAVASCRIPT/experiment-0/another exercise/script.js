let password = document.querySelector("#password");
let form = document.querySelector(".form");
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
let passError = document.querySelector("#passError");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;
  let passINP = passwordRegex.test(password.value);
  console.log(passINP);
  if (!passINP) {
    passError.textContent =
      "this password must contain at least one uppercase one lowercase, one number and 8 digits";
    passError.classList.remove("green");
    passError.classList.add("red");
    console.log("noo!");
  }
  if (passINP) {
    passError.textContent = "You're good to go";
    passError.classList.replace("red", "green");
    console.log("yes");
  }
});
