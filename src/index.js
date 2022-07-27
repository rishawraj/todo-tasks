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

  const input = document.createElement("input");
  input.type = "text";
  input.name = "task";
  input.id = "task";

  const submit = document.createElement("button");
  submit.type = "submit";
  submit.textContent = "add task";

  const main = document.createElement("div");
  main.classList.add("main");

  nav.appendChild(h1);

  side.appendChild(createTask);
  createTask.appendChild(input);
  createTask.appendChild(submit);

  wrapper.appendChild(nav);
  wrapper.appendChild(side);
  wrapper.appendChild(main);

  return wrapper;
};

function loadPage() {
  const content = document.getElementById("content");
  content.appendChild(createWrapper());
}

loadPage();
