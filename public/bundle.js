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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./person */ \"./src/person.js\");\n// import './utils'\r\n\r\n\r\n\r\nconsole.log(\"app.js is running\");\r\nconsole.log(Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"square\"])(5));\r\nconsole.log(Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"add\"])(4,6));\r\nconsole.log(_utils__WEBPACK_IMPORTED_MODULE_0__[\"ercan\"]);\r\nObject(_person__WEBPACK_IMPORTED_MODULE_1__[\"isAdult\"])(20);\r\nObject(_person__WEBPACK_IMPORTED_MODULE_1__[\"isDrink\"])(33);\r\nconsole.log(Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(100, 35));\r\nconsole.log(Object(_person__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(100, 5, 6));\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/person.js":
/*!***********************!*\
  !*** ./src/person.js ***!
  \***********************/
/*! exports provided: isAdult, isDrink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isAdult\", function() { return isAdult; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isDrink\", function() { return isDrink; });\n\r\nconst isAdult = (age) => {\r\n        if(age > 18){\r\n            console.log('Yes you re adult');\r\n        }\r\n        else{\r\n            console.log('You re teenage');\r\n        }\r\n    };\r\n\r\nconst isDrink = (age) => {\r\n        if(age > 21){\r\n            console.log('Yes you can drink');\r\n        }\r\n        else{\r\n            console.log('No you can not a drink');\r\n        }\r\n    };\r\n\r\nconst minus = (a, b ,c) => a + (b * c);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (minus);\r\n\r\n//if you want to do this -> export default (a, b ,c) => a + (b * c);\r\n\r\n//if you want to change export this same meaning ---  export {isAdult, isDrink}\n\n//# sourceURL=webpack:///./src/person.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: square, add, ercan, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"square\", function() { return square; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ercan\", function() { return ercan; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return subtrack; });\nconsole.log('utils.js is running');\r\n\r\nconst ercan = 'bokum';\r\n\r\nconst square = (x) => {\r\n    return(\r\n     x*x\r\n    )};\r\n\r\nconst add = (a,b) => a + b ;\r\n\r\nconst subtrack = (a, b) => a - b;\r\n\r\n\r\n\r\n//export - named export - default export\r\n\r\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });