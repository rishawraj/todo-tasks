export default function createToDo(todo) {
  const main = document.getElementById("main");
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");

  const input = document.createElement("input");
  input.type = "checkbox";
  input.name = "todo";
  input.id = "todo";

  const para = document.createElement("p");
  para.textContent = todo;

  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "delete";
  button.addEventListener("click", (e) => {
    let name = e.target.parentElement.children[1].textContent;
    console.log(name);
  });

  todoItem.appendChild(input);
  todoItem.appendChild(para);
  todoItem.appendChild(button);

  main.appendChild(todoItem);
}
