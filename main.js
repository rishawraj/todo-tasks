/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/addTask.js":
/*!********************************!*\
  !*** ./src/modules/addTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createToDo)
/* harmony export */ });
function createToDo(todo, checked = false) {
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


/***/ }),

/***/ "./src/modules/checkbox.js":
/*!*********************************!*\
  !*** ./src/modules/checkbox.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkBox": () => (/* binding */ checkBox)
/* harmony export */ });
/* harmony import */ var _saveLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveLocal */ "./src/modules/saveLocal.js");


function checkBox(name) {
  let tasks = (0,_saveLocal__WEBPACK_IMPORTED_MODULE_0__.getTasks)();
  for (let i = 0; i < tasks.length; i += 2) {
    if (tasks[i] === name) {
      tasks[i + 1] = !tasks[i + 1];
    }
  }
  (0,_saveLocal__WEBPACK_IMPORTED_MODULE_0__.localSave)(tasks);
}




/***/ }),

/***/ "./src/modules/saveLocal.js":
/*!**********************************!*\
  !*** ./src/modules/saveLocal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToLocal": () => (/* binding */ addToLocal),
/* harmony export */   "getTasks": () => (/* binding */ getTasks),
/* harmony export */   "localSave": () => (/* binding */ localSave),
/* harmony export */   "removeAll": () => (/* binding */ removeAll),
/* harmony export */   "removeTask": () => (/* binding */ removeTask)
/* harmony export */ });
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addTask */ "./src/modules/addTask.js");
/* harmony import */ var _modules_saveLocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/saveLocal */ "./src/modules/saveLocal.js");
/* harmony import */ var _modules_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/checkbox */ "./src/modules/checkbox.js");






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
      (0,_modules_saveLocal__WEBPACK_IMPORTED_MODULE_1__.addToLocal)(input.value);
      render();
      input.value = "";
    }
  });

  const deleteAllBtn = document.createElement("button");
  deleteAllBtn.textContent = "delete all tasks";
  deleteAllBtn.classList.add("bg-red");
  deleteAllBtn.addEventListener("click", () => {
    (0,_modules_saveLocal__WEBPACK_IMPORTED_MODULE_1__.removeAll)();
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
    (0,_modules_saveLocal__WEBPACK_IMPORTED_MODULE_1__.removeTask)(taskName);
    main.innerHTML = "";
    render();
    console.log(taskName);
  }
});

document.addEventListener("click", (e) => {
  if (e.target.id == "todo") {
    let name = e.target.parentElement.children[1].textContent;
    (0,_modules_checkbox__WEBPACK_IMPORTED_MODULE_2__.checkBox)(name);
    main.innerHTML = "";
    render();
  }
});

// ? event delagation

function render() {
  let tasks = (0,_modules_saveLocal__WEBPACK_IMPORTED_MODULE_1__.getTasks)();
  for (let i = 0; i < tasks.length; i += 2) {
    (0,_modules_addTask__WEBPACK_IMPORTED_MODULE_0__["default"])(tasks[i], tasks[i + 1]);
  }
}

function loadPage() {
  const content = document.getElementById("content");
  content.appendChild(createWrapper());
}

document.addEventListener("DOMContentLoaded", () => {
  render();
});

loadPage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzlCa0Q7O0FBRWxEO0FBQ0EsY0FBYyxvREFBUTtBQUN0QixrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxREFBUztBQUNYOztBQUVvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWtFOzs7Ozs7O1VDdENsRTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOcUM7QUFDTTtBQU1kOztBQUVpQjs7QUFFOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNLDhEQUFVO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUFTO0FBQ2I7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOERBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyREFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQSxjQUFjLDREQUFRO0FBQ3RCLGtCQUFrQixrQkFBa0I7QUFDcEMsSUFBSSw0REFBVTtBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctdG9kby1hcHAvLi9zcmMvbW9kdWxlcy9hZGRUYXNrLmpzIiwid2VicGFjazovL25ldy10b2RvLWFwcC8uL3NyYy9tb2R1bGVzL2NoZWNrYm94LmpzIiwid2VicGFjazovL25ldy10b2RvLWFwcC8uL3NyYy9tb2R1bGVzL3NhdmVMb2NhbC5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9uZXctdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9uZXctdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZXctdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVG9Ebyh0b2RvLCBjaGVja2VkID0gZmFsc2UpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKFwidG9kby1pdGVtXCIpO1xuICBpZiAoY2hlY2tlZCkge1xuICAgIHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNoZWNrZWRcIik7XG4gIH1cblxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgaW5wdXQubmFtZSA9IFwidG9kb1wiO1xuICBpbnB1dC5pZCA9IFwidG9kb1wiO1xuICBpbnB1dC5jaGVja2VkID0gY2hlY2tlZDtcblxuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmEudGV4dENvbnRlbnQgPSB0b2RvO1xuICBpZiAoY2hlY2tlZCkge1xuICAgIHBhcmEuY2xhc3NMaXN0LmFkZChcImxpbmUtdGhyb3VnaFwiKTtcbiAgfVxuXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXRhc2stYnRuXCIpO1xuICBidXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiZGVsZXRlXCI7XG5cbiAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICB0b2RvSXRlbS5hcHBlbmRDaGlsZChwYXJhKTtcbiAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICBtYWluLmFwcGVuZENoaWxkKHRvZG9JdGVtKTtcbn1cbiIsImltcG9ydCB7IGdldFRhc2tzLCBsb2NhbFNhdmUgfSBmcm9tIFwiLi9zYXZlTG9jYWxcIjtcblxuZnVuY3Rpb24gY2hlY2tCb3gobmFtZSkge1xuICBsZXQgdGFza3MgPSBnZXRUYXNrcygpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgaWYgKHRhc2tzW2ldID09PSBuYW1lKSB7XG4gICAgICB0YXNrc1tpICsgMV0gPSAhdGFza3NbaSArIDFdO1xuICAgIH1cbiAgfVxuICBsb2NhbFNhdmUodGFza3MpO1xufVxuXG5leHBvcnQgeyBjaGVja0JveCB9O1xuIiwiZnVuY3Rpb24gYWRkVG9Mb2NhbCh0YXNrKSB7XG4gIGxldCB0YXNrcyA9IGdldFRhc2tzKCk7XG4gIHRhc2tzLnB1c2godGFzayk7XG4gIC8vIGFkZGluZyBjaGVja2JveCBzdGF0dXNcbiAgdGFza3MucHVzaChmYWxzZSk7XG4gIGxvY2FsU2F2ZSh0YXNrcyk7XG4gIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2tzKCkge1xuICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSA9PSBudWxsXG4gICAgPyBbXVxuICAgIDogSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcbn1cblxuLy8gISBpbXByb3ZlIHRoaXMgZnVuY3Rpb25cbmZ1bmN0aW9uIHJlbW92ZVRhc2sodGFzaykge1xuICBsZXQgdGFza3MgPSBnZXRUYXNrcygpO1xuICBsZXQgbmV3VGFza3MgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIGlmICh0YXNrc1tpXSAhPT0gdGFzaykge1xuICAgICAgbmV3VGFza3MucHVzaCh0YXNrc1tpXSk7XG4gICAgICAvLyBhZGRpbmcgY2hlY2tib3ggc3RhdHVzXG4gICAgICBuZXdUYXNrcy5wdXNoKHRhc2tzW2kgKyAxXSk7XG4gICAgfVxuICB9XG5cbiAgbG9jYWxTYXZlKG5ld1Rhc2tzKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWxsKCkge1xuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbn1cblxuZnVuY3Rpb24gbG9jYWxTYXZlKHRhc2tzKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbn1cblxuZXhwb3J0IHsgYWRkVG9Mb2NhbCwgZ2V0VGFza3MsIHJlbW92ZUFsbCwgcmVtb3ZlVGFzaywgbG9jYWxTYXZlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGRlIH0gZnJvbSBcImRhdGUtZm5zL2xvY2FsZVwiO1xuaW1wb3J0IGNyZWF0ZVRvRG8gZnJvbSBcIi4vbW9kdWxlcy9hZGRUYXNrXCI7XG5pbXBvcnQge1xuICBhZGRUb0xvY2FsLFxuICBnZXRUYXNrcyxcbiAgcmVtb3ZlVGFzayxcbiAgcmVtb3ZlQWxsLFxufSBmcm9tIFwiLi9tb2R1bGVzL3NhdmVMb2NhbFwiO1xuXG5pbXBvcnQgeyBjaGVja0JveCB9IGZyb20gXCIuL21vZHVsZXMvY2hlY2tib3hcIjtcblxuY29uc3QgY3JlYXRlV3JhcHBlciA9ICgpID0+IHtcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIndyYXBwZXJcIik7XG5cbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XG5cbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGgxLnRleHRDb250ZW50ID0gXCJUTyBETydzIEFwcFwiO1xuXG4gIGNvbnN0IHNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaWRlLmNsYXNzTGlzdC5hZGQoXCJzaWRlXCIpO1xuXG4gIGNvbnN0IGNyZWF0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjcmVhdGVUYXNrLmNsYXNzTGlzdC5hZGQoXCJjcmVhdGUtdGFza1wiKTtcblxuICBjb25zdCBjcmVhdGVUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIGlucHV0Lm5hbWUgPSBcInRhc2tcIjtcbiAgaW5wdXQuaWQgPSBcInRhc2tcIjtcbiAgaW5wdXQucGxhY2Vob2xkZXIgPSBcImVudGVyIHRhc2tcIjtcblxuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWJtaXQudHlwZSA9IFwic3VibWl0XCI7XG4gIHN1Ym1pdC50ZXh0Q29udGVudCA9IFwiYWRkIHRhc2tcIjtcblxuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChpbnB1dC52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImludmFsaWQgaW5wdXRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGFkZFRvTG9jYWwoaW5wdXQudmFsdWUpO1xuICAgICAgcmVuZGVyKCk7XG4gICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBkZWxldGVBbGxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZWxldGVBbGxCdG4udGV4dENvbnRlbnQgPSBcImRlbGV0ZSBhbGwgdGFza3NcIjtcbiAgZGVsZXRlQWxsQnRuLmNsYXNzTGlzdC5hZGQoXCJiZy1yZWRcIik7XG4gIGRlbGV0ZUFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlbW92ZUFsbCgpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcbiAgICByZW5kZXIoKTtcbiAgfSk7XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gIG1haW4uaWQgPSBcIm1haW5cIjtcblxuICBuYXYuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gIHNpZGUuYXBwZW5kQ2hpbGQoY3JlYXRlVGFzayk7XG5cbiAgY3JlYXRlVGFzay5hcHBlbmRDaGlsZChjcmVhdGVUYXNrRm9ybSk7XG4gIGNyZWF0ZVRhc2suYXBwZW5kQ2hpbGQoZGVsZXRlQWxsQnRuKTtcblxuICBjcmVhdGVUYXNrRm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIGNyZWF0ZVRhc2tGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgd3JhcHBlci5hcHBlbmRDaGlsZChuYXYpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKHNpZGUpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKG1haW4pO1xuXG4gIHJldHVybiB3cmFwcGVyO1xufTtcblxuLy8gPyBFdmVudCBkZWxhZ2F0aW9uXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZS10YXNrLWJ0blwiKSkge1xuICAgIGxldCB0YXNrTmFtZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQ7XG4gICAgcmVtb3ZlVGFzayh0YXNrTmFtZSk7XG4gICAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHJlbmRlcigpO1xuICAgIGNvbnNvbGUubG9nKHRhc2tOYW1lKTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuaWQgPT0gXCJ0b2RvXCIpIHtcbiAgICBsZXQgbmFtZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQ7XG4gICAgY2hlY2tCb3gobmFtZSk7XG4gICAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHJlbmRlcigpO1xuICB9XG59KTtcblxuLy8gPyBldmVudCBkZWxhZ2F0aW9uXG5cbmZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgbGV0IHRhc2tzID0gZ2V0VGFza3MoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIGNyZWF0ZVRvRG8odGFza3NbaV0sIHRhc2tzW2kgKyAxXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlV3JhcHBlcigpKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICByZW5kZXIoKTtcbn0pO1xuXG5sb2FkUGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9