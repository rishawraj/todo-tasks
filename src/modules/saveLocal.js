function addToLocal(task) {
  let tasks = getTasks();
  tasks.push(task);
  localSave(tasks);
  console.log(localStorage);
}

function getTasks() {
  return localStorage.getItem("tasks") == null
    ? []
    : JSON.parse(localStorage.getItem("tasks"));
}

// !improve this function
function removeTask(task) {
  let tasks = getTasks();
  let newTasks = [];
  tasks.forEach((element, index) => {
    if (element !== task) {
      newTasks.push(tasks[index]);
    }
  });

  localSave(newTasks);
}

function removeAll() {
  localStorage.clear();
}

function localSave(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export { addToLocal, getTasks, removeAll, removeTask };
