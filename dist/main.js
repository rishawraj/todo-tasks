/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const createWrapper = () => {\n  const wrapper = document.createElement(\"div\");\n  wrapper.classList.add(\"wrapper\");\n\n  const nav = document.createElement(\"div\");\n  nav.classList.add(\"nav\");\n\n  const h1 = document.createElement(\"h1\");\n  h1.textContent = \"TO DO's App\";\n\n  const side = document.createElement(\"div\");\n  side.classList.add(\"side\");\n\n  const createTask = document.createElement(\"div\");\n  createTask.classList.add(\"create-task\");\n\n  const input = document.createElement(\"input\");\n  input.type = \"text\";\n  input.name = \"task\";\n  input.id = \"task\";\n\n  const submit = document.createElement(\"button\");\n  submit.type = \"submit\";\n  submit.textContent = \"add task\";\n\n  const main = document.createElement(\"div\");\n  main.classList.add(\"main\");\n\n  nav.appendChild(h1);\n\n  side.appendChild(createTask);\n  createTask.appendChild(input);\n  createTask.appendChild(submit);\n\n  wrapper.appendChild(nav);\n  wrapper.appendChild(side);\n  wrapper.appendChild(main);\n\n  return wrapper;\n};\n\nfunction loadPage() {\n  const content = document.getElementById(\"content\");\n  content.appendChild(createWrapper());\n}\n\nloadPage();\n\n\n//# sourceURL=webpack://new-todo-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;