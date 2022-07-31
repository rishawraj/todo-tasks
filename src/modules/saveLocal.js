function addToLocal(task) {
  let tasks = getTasks();
  tasks.push(task);
  // adding checkbox status
  tasks.push(false);
  localSave(tasks);
  console.log(localStorage);
}

function getTasks() {
  return localStorage.getItem("tasks") == null
    ? []
    : JSON.parse(localStorage.getItem("tasks"));
}

// ! improve this function
function removeTask(task) {
  let tasks = getTasks();
  let newTasks = [];
  for (let i = 0; i < tasks.length; i += 2) {
    if (tasks[i] !== task) {
      newTasks.push(tasks[i]);
      // adding checkbox status
      newTasks.push(tasks[i + 1]);
    }
  }

  localSave(newTasks);
}

function removeAll() {
  localStorage.clear();
}

function localSave(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export { addToLocal, getTasks, removeAll, removeTask, localSave };
