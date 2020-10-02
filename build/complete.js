/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const ALlProjects = [\r\n]\r\n\r\nconst defaultExerciseProject = {\r\n  name: \"My Exercise Plan\",\r\n  list:\r\n  [\r\n    {\r\n    title: \"Do 20 Squats before breakfast\",\r\n    description: \"I need squats to .... Lorem ipsim jseft yug huger serdagh montergh dergrats\",\r\n    dueDate: 12102020,\r\n    priority: 2\r\n  },\r\n  {\r\n    title: \"Do 20 pushups after breakfast\",\r\n    description: \"Pushups are good for strength and cardio .... Lorem ipsim jseft yug huger serdagh montergh dergrats\",\r\n    dueDate: 12102020,\r\n    priority: 1\r\n  },\r\n  {\r\n    title: \"Do planks for 3 min after work\",\r\n    description: \"Planks are great for the circuit .... Lorem ipsim jseft yug huger serdagh montergh dergrats\",\r\n    dueDate: 12102020,\r\n    priority: 3\r\n  }\r\n  ]\r\n}\r\n\r\n class Todo {  \r\n   constructor (title, description, dueDate, priority) {\r\n      this.title = title;\r\n      this.description = description;\r\n      this.dueDate = dueDate;\r\n      this.priority = priority;\r\n    }\r\n  }\r\n\r\nclass Project {\r\n  constructor(name) {\r\n    this.name = name;\r\n    this.list = [];\r\n\r\n    ALlProjects.push(this)\r\n  }\r\n\r\n  addTodo(title, description, dueDate, priority) {\r\n    let newTodo = new Todo(title, description, dueDate, priority);\r\n    this.list.push(newTodo)\r\n  }  \r\n}\r\n\r\n// let newTodo = new Todo(\"Jug 20 mins\", \"Jugging is good\", 202010, 2);\r\n// console.log(newTodo);\r\nlet a = new Project(\"Lola\");\r\nconsole.log(a.list);\r\na.addTodo(\"Jug 20 mins\", \"Jugging is good\", 202010, 2);\r\nconsole.log(a.list);\r\nconsole.log(defaultExerciseProject.list);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });