let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //   console.log(
  //     inputs[0].value,
  //     inputs[1].value,
  //     inputs[2].value,
  //     inputs[3].value,
  //     inputs[4].value,
  //   );

  let card = document.createElement("div");
  card.classList.add("card");
  let profile = document.createElement("div");
  profile.classList.add("profile");
  card.appendChild(profile);
  let img = document.createElement("img");
  img.setAttribute("src", inputs[4].value);
  profile.appendChild(img);
  let h3 = document.createElement("h3");
  h3.textContent = inputs[0].value;
  card.appendChild(h3);
  let h5 = document.createElement("h5");
  h5.textContent = inputs[1].value;
  card.appendChild(h5);
  let h6 = document.createElement("h6");
  h6.textContent = inputs[3].value;
  card.appendChild(h6);
  let p = document.createElement("p");
  p.textContent = inputs[2].value;
  card.appendChild(p);
  document.body.prepend(card);
  if (inputs.type !== "submit") {
    val.value = "";
  }
});
