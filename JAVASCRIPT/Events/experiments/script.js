// let h1 = document.querySelector("h1");
// h1.addEventListener("click", (val) => (h1.style.color = "red"));

// let p = document.querySelector("p");
// function dblclick() {
//   p.style.color = "green";
// }
// p.addEventListener("dblclick", dblclick);
// p.removeEventListener("dblclick", dblclick);

//

//this one needs upgrade as a practice session
// let inp = document.querySelector("input");
// inp.classList.add("input");
// inp.addEventListener("input", (val) => {
//   if (val.data !== null) {
//     console.log(val.data);
//   }
// });

//

//device selector
// let h2 = document.querySelector("h2");
// let sel = document.querySelector("select");
// sel.addEventListener("change", (event) => {
//   console.log(event.target.value);
//   if (event.target.value !== "default") {
//     h2.textContent = `device selected: ${event.target.value}`;
//   }
// });

//

// Dynamic fullscreen typing code
// let h1 = document.querySelector("#hero-text");
// document.addEventListener("keydown", (val) => {
//   if (val.key === " ") {
//     h1.textContent = "SPC";
//   } else {
//     h1.textContent = val.key;
//   }
// });

let text = document.querySelector(".text");
let OrgInp = document.querySelector(".input");
text.addEventListener("click", (e) => {
  OrgInp.click();
});
OrgInp.addEventListener(
  "change",
  (e) => {
    const file = e.target.files[0];
    if (file) {
      text.textContent = file.name ;
      console.log(`file - ${file.name} - selected`);
    }
  },
  //details of the file can be checked through console
);
