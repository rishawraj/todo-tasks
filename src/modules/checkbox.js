import { getTasks, localSave } from "./saveLocal";

function checkBox(name) {
  let tasks = getTasks();
  for (let i = 0; i < tasks.length; i += 2) {
    if (tasks[i] === name) {
      tasks[i + 1] = !tasks[i + 1];
    }
  }
  localSave(tasks);
}

export { checkBox };
