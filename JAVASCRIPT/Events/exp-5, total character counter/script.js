let inp = document.querySelector("input");
let totalChar = document.querySelector("#total");
let characters = document.querySelector("#characters");
let totalWrd = document.querySelector("#words");

inp.addEventListener("input", (e) => {
  let text = inp.value
  totalChar.textContent = text.length;
  characters.textContent = inp.value;
  totalWrd.textContent = text.trim().split(/\s+/).length
});
