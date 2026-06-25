let box = document.querySelector("#box");

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    return StartGame();
  }
});
mouseX = 0;
mouseY = 0;
boxX = 100;
// boxY = 100;
// if (boxX < mouseX) boxX++;
// if (boxX > mouseX) mouseX++;
// if (boxY < mouseY) boxY++;
// if (boxY > mouseY) mouseY++;
function StartGame() {
  box.textContent = "Game Started";
  window.addEventListener("mousemove", (e) => {
    box.style.top = e.clientY + "px";
    box.style.left = e.clientX + "px";
    let coordsX = e.clientX + "px";
    let coordsY = e.clientY + "px";
    box.textContent = `${coordsX}, ${coordsY}`;
    document.body.appendChild(coordsX);
    document.body.appendChild(coordsY);
  });
  window.addEventListener("mouseout", (e) => {
    box.style.transition = "all 0.3s ease";
    box.textContent = "COME BACK!!!";
  });
}
