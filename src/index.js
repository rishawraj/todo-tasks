import { getDate } from "date-fns";
import createToDo from "./modules/addTask";

const createWrapper = () => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const nav = document.createElement("div");
  nav.classList.add("nav");

  const h1 = document.createElement("h1");
  h1.textContent = "TO DO's App";

  const side = document.createElement("div");
  side.classList.add("side");

  const createTask = document.createElement("div");
  createTask.classList.add("create-task");

  const createTaskForm = document.createElement("form");

  const input = document.createElement("input");
  input.type = "text";
  input.name = "task";
  input.id = "task";
  input.placeholder = "enter task";

  const submit = document.createElement("button");
  submit.type = "submit";
  submit.textContent = "add task";

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value == "") {
      console.log("invalid input");
    } else {
      main.innerHTML = "";
      addToLocal(input.value);
      render();
    }
  });

  const deleteAllBtn = document.createElement("button");
  deleteAllBtn.textContent = "clear storage";
  deleteAllBtn.addEventListener("click", () => {
    clearLocalStorage();
  });

  const main = document.createElement("div");
  main.classList.add("main");
  main.id = "main";

  nav.appendChild(h1);

  side.appendChild(createTask);

  createTask.appendChild(createTaskForm);
  createTask.appendChild(deleteAllBtn);

  createTaskForm.appendChild(input);
  createTaskForm.appendChild(submit);

  wrapper.appendChild(nav);
  wrapper.appendChild(side);
  wrapper.appendChild(main);

  return wrapper;
};

function render() {
  // let tasks =
}

function loadPage() {
  const content = document.getElementById("content");
  content.appendChild(createWrapper());
}

document.addEventListener("DOMContentLoaded", () => {
  render();
});

loadPage();
