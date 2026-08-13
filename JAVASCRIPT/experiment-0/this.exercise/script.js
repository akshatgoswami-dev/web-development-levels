let form = document.querySelector("form");
let username = document.querySelector(".name");
let role = document.querySelector(".role");
let bio = document.querySelector(".bio");
let image = document.querySelector(".img");
let vowels = document.querySelector("#vowels");
let clear = document.querySelector(".clear");
const UserManager = {
  users: [],
};

vowels.addEventListener("input", () => {
  const result = countVowels(vowels.value);
  console.log(result);
  p.textContent = `result:  ${+result}`;
  clear.addEventListener("click", () => {
    vowels.value = "";
    p.textContent = "";
  });
});
let display = document.createElement("div");
display.classList.add("display");
let p = document.createElement("p");

p.style.color = "rgb(167, 164, 164);asd";
display.appendChild(p);
document.body.appendChild(display, clear);
// console.dir(vowels);
function countVowels(input) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "a") count++;

    if (input[i] === "e") count++;

    if (input[i] === "i") count++;

    if (input[i] === "o") count++;

    if (input[i] === "u") count++;
  }
  return count;
}
