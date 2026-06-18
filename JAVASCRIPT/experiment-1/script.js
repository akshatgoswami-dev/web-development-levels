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

function rps(user, computer) {
  if ((!user || !computer)) {
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

rps( );
