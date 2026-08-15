let addBtn = document.querySelector(".addBtn");
let closeBtn = document.querySelector("#modal-close");
let addTask = document.querySelector("#modal-add");
let modal = document.querySelector(".modal");
let taskInput = document.querySelector("#task-input");

addBtn.addEventListener("click", () => {
  modal.classList.add("modal-hide");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("modal-hide");
});

addTask.addEventListener("click", (e) => {
  e.preventDefault();
  const task = taskInput.value;
  //   console.log(task);
  CreateTask(task);
});

function CreateTask(elem) {
  const form = document.querySelector("#form");

  let label = document.createElement("label");
  label.classList.add("form-item");

  let inp = document.createElement("input");
  inp.classList.add("content");
  inp.type = "checkbox";

  label.append(inp);
  label.append(elem);
  console.log(label);

  form.append(label);
}

function displayTasks() {}
