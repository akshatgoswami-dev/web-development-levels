let textarea = document.querySelector("#text");
let characters = document.querySelector("#chars");
let word = document.querySelector("#words");
let status = document.querySelector("#status");
let clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
  textarea.value = " ";
  location.reload();
});

textarea.addEventListener("input", () => {
  const charNum = textarea.value.length;
  characters.textContent = `characters: ${charNum}`;
  const words = textarea.value.trim();
  const wordCount = words === "" ? 0 : words.split(/\s+/).length;
  word.textContent = `words: ${wordCount}`;

  if (wordCount >= 50) {
    textarea.setAttribute("disabled", true);
    status.textContent = "LIMIT EXCEEDED";
  }
});
