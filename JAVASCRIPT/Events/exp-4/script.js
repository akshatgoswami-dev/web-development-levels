let lis = document.querySelectorAll("li");

for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener("mouseover", (e) => {
    if (lis[i].style.textDecoration !== "line-through") {
      e.target.style.color = "red";
    }
  });
  lis[i].addEventListener("mouseout", (e) => {
    if (lis[i].style.textDecoration !== "line-through") {
      e.target.style.color = "";
    }
    if (lis[i].style.textDecoration === "line-through") {
      e.target.style.backgroundColor = "";
    }
  });
  lis[i].addEventListener("click", (e) => {
    e.target.classList.toggle("completed");
  });
 
}
