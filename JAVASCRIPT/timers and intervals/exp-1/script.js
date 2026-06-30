let cls = document.querySelector(".alert-banner");
let h1 = document.querySelector("h1");
let count = 5;
let intV = setInterval(() => {
  count--;
  h1.textContent = count;
  if (count === 0) {
    cls.style.display = "none";
    clearInterval(intV);
  }
}, 1000);
