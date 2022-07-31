export default function createToDo(todo, checked = false) {
  const main = document.getElementById("main");
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");
  if (checked) {
    todoItem.classList.add("todo-checked");
  }

  const input = document.createElement("input");
  input.type = "checkbox";
  input.name = "todo";
  input.id = "todo";
  input.checked = checked;

  const para = document.createElement("p");
  para.textContent = todo;
  if (checked) {
    para.classList.add("line-through");
  }

  const button = document.createElement("button");
  button.classList.add("delete-task-btn");
  button.type = "submit";
  button.textContent = "delete";

  todoItem.appendChild(input);
  todoItem.appendChild(para);
  todoItem.appendChild(button);

  main.appendChild(todoItem);
}
