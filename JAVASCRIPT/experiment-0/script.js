function createToaster(config) {
  return function (str) {
    let parDiv = document.querySelector(".parent");
    let div = document.createElement("div");
    div.textContent = str;
    div.className = "toaster";
    parDiv.appendChild(div);
    setTimeout(() => {
      parDiv.removeChild(div);
    }, config.duration * 1000);

    if (config.positionX !== "left") {
      parDiv.classList.add("toaster-right");
    } else {
      parDiv.classList.add("toaster-left");
    }
    if (config.positionY !== "top") {
      parDiv.classList.add("toaster-bottom");
    } else {
      parDiv.classList.add("toaster-top");
    }
  };
}

let toaster = createToaster({
  positionX: "right",
  positionY: "top",
  duration: 4,
  theme: "dark",
});

toaster("hello world this is akshat, and im building to become a builder");
toaster("i almost set the code backwards lMao");

setTimeout(() => {
  toaster("F h k o u...");
}, 2000);
