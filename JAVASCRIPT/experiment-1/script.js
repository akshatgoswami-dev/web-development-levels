//rock-paper-scissor

// function rps(user, computer) {
//   if (user === "rock" && computer === "scissor") return "rock won";
//   if (user === "scissor" && computer === "rock") return "rock won";
//   if (user === "scissor" && computer === "paper") return "scissor won";
//   if (user === "paper" && computer === "scissor") return "scissor won";
//   if (user === "paper" && computer === "rock") return "paper won";
//   if (user === "rock" && computer === "paper") return "paper won";
//   return "draw";
// }
// console.log(rps("paper", "rock"));

let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("disabled", "true");
input.setAttribute("placeholder", " Enter your Input");
document.body.append(input);
let box = document.createElement("div");
box.classList.add("box");

let options = document.createElement("div");
let paper = document.createElement("h3");
let scissor = document.createElement("h3");
let rock = document.createElement("h3");
paper.textContent = "paper";
paper.classList.add("choices");
scissor.classList.add("choices");
rock.classList.add("choices");
rock.textContent = "rock";
scissor.textContent = "scissor";

options.classList.add("options");
options.append(rock, paper, scissor);
document.body.append(box);
box.append(input, options);

function rps(user, computer) {
  if (!user || !computer) {
    return "please enter your input";
  }
  if (
    (user === "rock" && computer === "scissor") ||
    (user === "scissor" && computer === "paper") ||
    (user === "paper" && computer === "rock")
  ) {
    return "user won";
  }
  if (user === computer) {
    return "draw";
  }

  return "computer won";
}

rps();
