/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addTask */ \"./src/modules/addTask.js\");\n/* harmony import */ var _modules_saveLocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/saveLocal */ \"./src/modules/saveLocal.js\");\n\n\n\n\nconst createWrapper = () => {\n  const wrapper = document.createElement(\"div\");\n  wrapper.classList.add(\"wrapper\");\n\n  const nav = document.createElement(\"div\");\n  nav.classList.add(\"nav\");\n\n  const h1 = document.createElement(\"h1\");\n  h1.textContent = \"TO DO's App\";\n\n  const side = document.createElement(\"div\");\n  side.classList.add(\"side\");\n\n  const createTask = document.createElement(\"div\");\n  createTask.classList.add(\"create-task\");\n\n  const createTaskForm = document.createElement(\"form\");\n\n  const input = document.createElement(\"input\");\n  input.type = \"text\";\n  input.name = \"task\";\n  input.id = \"task\";\n  input.placeholder = \"enter task\";\n\n  const submit = document.createElement(\"button\");\n  submit.type = \"submit\";\n  submit.textContent = \"add task\";\n\n  submit.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    if (input.value == \"\") {\n      console.log(\"invalid input\");\n    } else {\n      main.innerHTML = \"\";\n      (0,_modules_saveLocal__WEBPACK_IMPORTED_MODULE_1__.addToLocal)(input.value);\n      render();\n      input.value = \"\";\n    }\n  });\n\n  const deleteAllBtn = document.createElement(\"button\");\n  deleteAllBtn.textContent = \"clear storage\";\n  deleteAllBtn.addEventListener(\"click\", () => {\n    (0,_modules_saveLocal__WEBPACK_IMPORTED_MODULE_1__.removeAll)();\n    main.innerHTML = \"\";\n    render();\n  });\n\n  const main = document.createElement(\"div\");\n  main.classList.add(\"main\");\n  main.id = \"main\";\n\n  nav.appendChild(h1);\n\n  side.appendChild(createTask);\n\n  createTask.appendChild(createTaskForm);\n  createTask.appendChild(deleteAllBtn);\n\n  createTaskForm.appendChild(input);\n  createTaskForm.appendChild(submit);\n\n  wrapper.appendChild(nav);\n  wrapper.appendChild(side);\n  wrapper.appendChild(main);\n\n  return wrapper;\n};\n\n// ? Event delagation\ndocument.addEventListener(\"click\", (e) => {\n  if (e.target.classList.contains(\"delete-task-btn\")) {\n    let taskName = e.target.parentElement.children[1].textContent;\n    (0,_modules_saveLocal__WEBPACK_IMPORTED_MODULE_1__.removeTask)(taskName);\n    main.innerHTML = \"\";\n    render();\n    console.log(taskName);\n  }\n});\n\nfunction render() {\n  let tasks = (0,_modules_saveLocal__WEBPACK_IMPORTED_MODULE_1__.getTasks)();\n  tasks.forEach((element) => {\n    (0,_modules_addTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element);\n  });\n}\n\nfunction loadPage() {\n  const content = document.getElementById(\"content\");\n  content.appendChild(createWrapper());\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  render();\n});\n\nloadPage();\n\n\n//# sourceURL=webpack://new-todo-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/addTask.js":
/*!********************************!*\
  !*** ./src/modules/addTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createToDo)\n/* harmony export */ });\nfunction createToDo(todo) {\n  const main = document.getElementById(\"main\");\n  const todoItem = document.createElement(\"div\");\n  todoItem.classList.add(\"todo-item\");\n\n  const input = document.createElement(\"input\");\n  input.type = \"checkbox\";\n  input.name = \"todo\";\n  input.id = \"todo\";\n\n  const para = document.createElement(\"p\");\n  para.textContent = todo;\n\n  const button = document.createElement(\"button\");\n  button.classList.add(\"delete-task-btn\");\n  button.type = \"submit\";\n  button.textContent = \"delete\";\n\n  todoItem.appendChild(input);\n  todoItem.appendChild(para);\n  todoItem.appendChild(button);\n\n  main.appendChild(todoItem);\n}\n\n\n//# sourceURL=webpack://new-todo-app/./src/modules/addTask.js?");

/***/ }),

/***/ "./src/modules/saveLocal.js":
/*!**********************************!*\
  !*** ./src/modules/saveLocal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToLocal\": () => (/* binding */ addToLocal),\n/* harmony export */   \"getTasks\": () => (/* binding */ getTasks),\n/* harmony export */   \"removeAll\": () => (/* binding */ removeAll),\n/* harmony export */   \"removeTask\": () => (/* binding */ removeTask)\n/* harmony export */ });\nfunction addToLocal(task) {\n  let tasks = getTasks();\n  tasks.push(task);\n  localSave(tasks);\n  console.log(localStorage);\n}\n\nfunction getTasks() {\n  return localStorage.getItem(\"tasks\") == null\n    ? []\n    : JSON.parse(localStorage.getItem(\"tasks\"));\n}\n\n// !improve this function\nfunction removeTask(task) {\n  let tasks = getTasks();\n  let newTasks = [];\n  tasks.forEach((element, index) => {\n    if (element !== task) {\n      newTasks.push(tasks[index]);\n    }\n  });\n\n  localSave(newTasks);\n}\n\nfunction removeAll() {\n  localStorage.clear();\n}\n\nfunction localSave(tasks) {\n  localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n}\n\n\n\n\n//# sourceURL=webpack://new-todo-app/./src/modules/saveLocal.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;