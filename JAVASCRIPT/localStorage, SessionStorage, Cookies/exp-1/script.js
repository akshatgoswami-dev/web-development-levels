function setInitialTheme() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.add("light");
  }
}
setInitialTheme();
let h1 = document.querySelector("h1");
h1.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  document.documentElement.classList.toggle("light");
});
