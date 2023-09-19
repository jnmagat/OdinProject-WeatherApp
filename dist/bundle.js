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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherAPI */ \"./src/weatherAPI.js\");\n\r\n\r\nconst searchVal = document.getElementById('searchBar');\r\n\r\nsearchVal.addEventListener('keyup',function(e){\r\n    if(e.key == 'Enter' || e.keyCode === 13){\r\n        const search = document.getElementById('searchBar').value;\r\n        (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_0__.getCurrentWeather)(search);\r\n    }\r\n})\n\n//# sourceURL=webpack://weatherapp/./src/main.js?");

/***/ }),

/***/ "./src/weatherAPI.js":
/*!***************************!*\
  !*** ./src/weatherAPI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCurrentWeather: () => (/* binding */ getCurrentWeather)\n/* harmony export */ });\nconst ctnr = document.querySelector('.container');\r\n\r\nasync function getCurrentWeather(searchVal){\r\n    try {\r\n        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=5cc1e4cbe464489bb6b81709231109&q='+searchVal);\r\n        const data =  await response.json();\r\n        displayWeatherDetails(data);\r\n    } catch (error) {\r\n        console.log(error);\r\n    }\r\n   \r\n}\r\n\r\nfunction displayWeatherDetails(data){\r\n    let country = data.location.country;\r\n    let name = data.location.name;\r\n    let deg = data.current.temp_c;\r\n    let wind = data.current.wind_mph;\r\n    let hum = data.current.humidity;\r\n    let icon = data.current.condition.icon;\r\n\r\n    let card = document.createElement('div');\r\n    card.className = \"details\";\r\n    \r\n    let getCard = document.querySelector('.details');\r\n    if(getCard){\r\n        ctnr.removeChild(getCard);\r\n    }\r\n\r\n    let title = document.createElement('h1');\r\n    title.innerHTML = name + \", \" + country;\r\n    let degElement = document.createElement('h2');\r\n    degElement.innerHTML = deg + \"°C\";\r\n    let img = document.createElement('img');\r\n    img.src =  icon;\r\n    let windElement = document.createElement('p');\r\n    windElement.innerHTML = \"Wind: \"+ wind;\r\n    let humElement = document.createElement('p');\r\n    humElement.innerHTML = \"Humidity: \"+ hum;\r\n\r\n    ctnr.appendChild(card);\r\n    card.append(title, degElement, img, windElement, humElement);\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://weatherapp/./src/weatherAPI.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;