// let h1 = document.querySelector("h2.abcd");
// h1.textContent = "hello im rudeus";
// console.dir(h1);
// let a = document.getElementById("linkedIn");
// a.setAttribute("href", "https://www.linkedin.com");
// console.dir(a);
// let b = document.getElementById("GitHub");
// b.setAttribute("href", "https://www.github.com");
// console.dir(b);
// let i = document.getElementById("img-ken");
// i.setAttribute(
//   "src",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpK8NbUYTswJ6_B-4QEsP3RyWVd7BbcX6x7CeY9AVA_BiPJ27imaKjFQk&s=10",
// );
// let o = document.getElementById("ordinary-people");
// console.log(o.getAttribute("src"));

let h2 = document.createElement("h2");
h2.textContent = "hello sir";
document.querySelector("body").prepend(h2);
h2.style.letterSpacing = "2rem";
h2.style.padding = "3rem";

let black = document.getElementById("black");
black.style.background = "linear-gradient(purple, pink, royalblue)";
black.style.backgroundrepeat = "no-repeat";

let h3 = document.querySelector(".heading");
h3.classList.add("hybrid");
