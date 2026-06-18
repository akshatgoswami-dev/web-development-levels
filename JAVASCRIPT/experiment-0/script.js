function GetVal(Val) {
  if (Val < 55) return "D";
  else if (Val < 60) return "C";
  else if (Val < 75) return "B";
  else return "A";
}

function Getgrade(score) {
  if (score >= 90 && score <= 100) return "A+";
  if (score >= 80 && score <= 89) return "A";
  if (score >= 70 && score <= 79) return "B";
  if (score >= 60 && score <= 69) return "C";
  if (score >= 33 && score <= 59) return "D";
  if (score >= 0 && score <= 32) return "fail";
  return "invalid marks ❌";
}


