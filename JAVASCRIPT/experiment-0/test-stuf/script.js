const colorBox = document.getElementById("colorBox");
const colorCode = document.getElementById("colorCode");
const button = document.getElementById("generateBtn");

button.addEventListener("click", () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const color = `rgb(${red}, ${green}, ${blue})`;

  colorBox.style.backgroundColor = color;
  colorCode.textContent = color;
});
