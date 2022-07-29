import { de } from "date-fns/locale";
import createToDo from "./modules/addTask";
import {
  addToLocal,
  getTasks,
  removeTask,
  removeAll,
} from "./modules/saveLocal";

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
      input.value = "";
    }
  });

  const deleteAllBtn = document.createElement("button");
  deleteAllBtn.textContent = "clear storage";
  deleteAllBtn.addEventListener("click", () => {
    removeAll();
    main.innerHTML = "";
    render();
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

// ? Event delagation
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-task-btn")) {
    let taskName = e.target.parentElement.children[1].textContent;
    removeTask(taskName);
    main.innerHTML = "";
    render();
    console.log(taskName);
  }
});

function render() {
  let tasks = getTasks();
  tasks.forEach((element) => {
    createToDo(element);
  });
}

function loadPage() {
  const content = document.getElementById("content");
  content.appendChild(createWrapper());
}

document.addEventListener("DOMContentLoaded", () => {
  render();
});

loadPage();
