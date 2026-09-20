let h1 = document.querySelector("h1");
let inp = document.querySelector("#Input");
let submit = document.querySelector("#sub");

submit.addEventListener("click", () => {
  if (inp.value === "") {
    return alert("Please enter a value");
  }
  let val = inp.value;
  console.log(val);
  inp.setAttribute("disabled", "true");
  h1.addEventListener("click", function () {
    this.textContent = val;
    inp.value = "";
    console.log(this);
    inp.style.display = "none";
    submit.style.display = "none";

  });
});
