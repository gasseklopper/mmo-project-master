/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var SITE;
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/css/index.scss":
/*!***********************************!*\
  !*** ./src/assets/css/index.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://SITE/./src/assets/css/index.scss?");

/***/ }),

/***/ "./src/assets/js/_color_switch.js":
/*!****************************************!*\
  !*** ./src/assets/js/_color_switch.js ***!
  \****************************************/
/***/ (function() {

eval("let colorswitch = document\r\n\t.querySelectorAll(\".themeingbutton\")\r\n\t.forEach((elem) => {\r\n\t\telem.onclick = (e) => {\r\n\t\t\tvar doc = document.firstElementChild;\r\n\t\t\t\r\n\t\t\tif (doc.getAttribute(\"color-scheme\") == \"dark\") {\r\n\t\t\t\tdoc.setAttribute(\"color-scheme\", \"light\");\r\n\t\t\t\tlocalStorage.setItem(\"color-scheme\", \"light\");\r\n\t\t\t} else if (doc.getAttribute(\"color-scheme\") == \"light\") {\r\n\t\t\t\tdoc.setAttribute(\"color-scheme\", \"dark\");\r\n\t\t\t\tlocalStorage.setItem(\"color-scheme\", \"dark\");\r\n\t\t\t} else if (doc.getAttribute(\"color-scheme\") == \"default\") {\r\n\t\t\t\tdoc.setAttribute(\"color-scheme\", \"light\");\r\n\t\t\t\tlocalStorage.setItem(\"color-scheme\", \"light\");\r\n\t\t\t} else {\r\n\t\t\t\tif (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {\r\n\t\t\t\t\tdoc.setAttribute(\"color-scheme\", \"light\");\r\n\t\t\t\t\tlocalStorage.setItem(\"color-scheme\", \"light\");\r\n\t\t\t\t} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {\r\n\t\t\t\t\tdoc.setAttribute(\"color-scheme\", \"dark\");\r\n\t\t\t\t\tlocalStorage.setItem(\"color-scheme\", \"dark\");\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t};\r\n\t});\r\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/_color_switch.js?");

/***/ }),

/***/ "./src/assets/js/_colors-shemes-switch.js":
/*!************************************************!*\
  !*** ./src/assets/js/_colors-shemes-switch.js ***!
  \************************************************/
/***/ (function() {

eval("const switcher = document.querySelectorAll(\"#theme-switcher\").forEach((el) => {\r\n\tconst doc = document.firstElementChild;\r\n\r\n\tel.addEventListener(\"input\", (e) => setTheme(e.target.value));\r\n\r\n\tconst setTheme = (theme) => doc.setAttribute(\"color-scheme\", theme);\r\n\t// doc.classList.add('color-scheme');\r\n});\r\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/_colors-shemes-switch.js?");

/***/ }),

/***/ "./src/assets/js/_header.js":
/*!**********************************!*\
  !*** ./src/assets/js/_header.js ***!
  \**********************************/
/***/ (function() {

eval("// import Headroom from \"headroom.js\";\r\n// grab an element\r\n// var scroll_direction = document.querySelector(\".has-scroll-init\");\r\n// var htmlelm = document.querySelector(\"html\");\r\n// // console.log(\"scroll_direction\", scroll_direction.dataset.direction)\r\n// console.log(\"htmlelm\", htmlelm)\r\n\r\n// window.onscroll = () => {\r\n// \tconsole.log(\"scroll_direction\")\r\n// }\r\n\r\n// // construct an instance of Headroom, passing the element\r\n// var headroom = new Headroom(myElement);\r\n// // initialise\r\n// headroom.init();\r\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/_header.js?");

/***/ }),

/***/ "./src/assets/js/_headroom.js":
/*!************************************!*\
  !*** ./src/assets/js/_headroom.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! headroom.js */ \"./node_modules/headroom.js/dist/headroom.js\");\n/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(headroom_js__WEBPACK_IMPORTED_MODULE_0__);\n// if you're using a bundler, first import:\r\n\r\n// grab an element\r\nvar elems = document.querySelectorAll('.header')\r\n// var myElement = document.querySelector(\"header\");\r\n// construct an instance of Headroom, passing the element\r\nelems.forEach((elem) => {\r\n    var headroom  = new (headroom_js__WEBPACK_IMPORTED_MODULE_0___default())(elem);\r\n    // initialise\r\n    headroom.init();\r\n})\r\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/_headroom.js?");

/***/ }),

/***/ "./src/assets/js/_mobile_menu_button.js":
/*!**********************************************!*\
  !*** ./src/assets/js/_mobile_menu_button.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-scroll-lock */ \"./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js\");\nconst bodyScrollLock = __webpack_require__(/*! body-scroll-lock */ \"./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js\");\r\n\r\nconst disableBodyScroll = bodyScrollLock.disableBodyScroll;\r\nconst enableBodyScroll = bodyScrollLock.enableBodyScroll;\r\n\r\nconst options = {\r\n\treserveScrollBarGap: true,\r\n};\r\n\r\nconst mobileMenuButton = document.querySelectorAll(\".mobile_menu_button\");\r\nconst mobileMenu = document.querySelectorAll(\".mobile_menu\");\r\nconsole.log(\"mobile_button\", mobileMenuButton);\r\n\r\n// First we get the viewport height and we multiple it by 1% to get a value for a vh unit\r\nlet vh = window.innerHeight * 0.01;\r\n// Then we set the value in the --vh custom property to the root of the document\r\ndocument.documentElement.style.setProperty(\"--vh\", `${vh}px`);\r\n\r\nmobileMenuButton.forEach((elem) => {\r\n\telem.onclick = () => {\r\n\t\tmobileMenu.forEach((elem) => {\r\n\t\t\tif (elem.style.top == \"\") {\r\n\t\t\t\tdisableBodyScroll(elem, options);\r\n\t\t\t\telem.style.top = \"0\";\r\n\t\t\t} else if (elem.style.top == \"0px\") {\r\n\t\t\t\tenableBodyScroll(elem, options);\r\n\t\t\t\telem.style.top = \"-140vh\";\r\n\t\t\t} else {\r\n\t\t\t\tdisableBodyScroll(elem, options);\r\n\t\t\t\telem.style.top = \"0\";\r\n\t\t\t}\r\n\t\t});\r\n\t\tconsole.log(\"mobile_button\", elem);\r\n\t};\r\n});\r\n\r\nvar menuButton = document.getElementById(\"menuButton\");\r\nif (menuButton) {\r\n\tmenuButton.addEventListener(\"click\", (e) => {\r\n\t\tmenuButton.classList.toggle(\"is-active\");\r\n\t\te.preventDefault();\r\n\t});\r\n}\r\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/_mobile_menu_button.js?");

/***/ }),

/***/ "./src/assets/js/_toTopButton.js":
/*!***************************************!*\
  !*** ./src/assets/js/_toTopButton.js ***!
  \***************************************/
/***/ (function() {

eval("const elems = document.querySelectorAll(\".scrollToTopButton-js\");\r\n\r\nelems.forEach((elem) => {\r\n\telem.onclick = function (e) {\r\n\t\te.preventDefault();\r\n\r\n\t\twindow.scrollTo({\r\n\t\t\ttop: 0,\r\n\t\t\tbehavior: \"smooth\",\r\n\t\t});\r\n\t};\r\n});\r\n\r\n// const buttonElems = document.querySelectorAll(\".button_test\");\r\n\r\n// window.onscroll = (e) => {\r\n// \t// console.log(window.pageYOffset)\r\n// \tif (window.pageYOffset > \"650\") {\r\n// \t\t// console.log('button scroll 650 plus')\r\n// \t\tbuttonElems.forEach((elem) => {\r\n// \t\t\t// console.log(\"button\", elem )\r\n// \t\t\telem.classList.remove(\"button_test--hide\");\r\n// \t\t});\r\n// \t} else {\r\n// \t\tconsole.log(\"button scroll 650 minus\");\r\n// \t\tbuttonElems.forEach((elem) => {\r\n// \t\t\t// console.log(\"button\", elem )\r\n// \t\t\telem.classList.add(\"button_test--hide\");\r\n// \t\t});\r\n// \t}\r\n// };\r\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/_toTopButton.js?");

/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.scss */ \"./src/assets/css/index.scss\");\n/* harmony import */ var _colors_shemes_switch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_colors-shemes-switch.js */ \"./src/assets/js/_colors-shemes-switch.js\");\n/* harmony import */ var _colors_shemes_switch_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_colors_shemes_switch_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_header.js */ \"./src/assets/js/_header.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_header_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _color_switch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_color_switch.js */ \"./src/assets/js/_color_switch.js\");\n/* harmony import */ var _color_switch_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_color_switch_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _toTopButton_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_toTopButton.js */ \"./src/assets/js/_toTopButton.js\");\n/* harmony import */ var _toTopButton_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_toTopButton_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _headroom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_headroom.js */ \"./src/assets/js/_headroom.js\");\n/* harmony import */ var _mobile_menu_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_mobile_menu_button.js */ \"./src/assets/js/_mobile_menu_button.js\");\n/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! smoothscroll-polyfill */ \"./node_modules/smoothscroll-polyfill/dist/smoothscroll.js\");\n/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_7__);\n// import { gsap } from 'gsap'\r\n// import { ScrollTrigger } from 'gsap/ScrollTrigger'\r\n\r\n// import { preloader } from \"./_preloader\";\r\n\r\n// import css for webpack\r\n\r\n\r\n\r\n// // javscript imports\r\n\r\n\r\n// import \"./_cursor.js\";\r\n// // import './_test.js';\r\n\r\n// import './_mapbox.js';\r\n\r\n// import './_wow.js';\r\n// import './_scrollAnker.js';\r\n// import './_carousel.js';\r\n\r\n\r\n\r\n// import './_random_color.js';\r\n\r\n\r\n// import simpleParallax from 'simple-parallax-js';\r\n\r\nsmoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_7___default().polyfill()\r\n\r\n// ///////////////////////// image Pralax ///////////////////////////////////////////////\r\n// var image = document.getElementsByClassName('thumbnail');\r\n// new simpleParallax(image);\r\n// new simpleParallax(image, {\r\n// \tscale: 1.5\r\n// });\r\n\r\n/////////////////////////card fading scroll ///////////////////////////////////////////////\r\n// gsap.registerPlugin(ScrollTrigger);\r\n\r\n// gsap.to(\".panel:not(:last-child)\", {\r\n//   yPercent: -100,\r\n//   ease: \"none\",\r\n//   stagger: 0.5,\r\n//   scrollTrigger: {\r\n//     trigger: \"#container\",\r\n//     start: \"top top\",\r\n//     end: \"+=300%\",\r\n//     scrub: true,\r\n//     pin: true\r\n//   }\r\n// });\r\n\r\n// gsap.set(\".panel\", {zIndex: (i, target, targets) => targets.length - i});\r\n\r\n// let red_panel = document.querySelector('.red')\r\n\r\n// let red_inner = document.querySelector('.panel_inner')\r\n// // let rectCollection = red_inner.getClientRects();\r\n// const rect = red_inner.getBoundingClientRect();\r\n// console.log(`height: ${rect.height}`);\r\n\r\n// red_panel.style.height = (rect.height + 200) + 'px';\r\n\r\n/////////////////////////preloader images ///////////////////////////////////////////////\r\n// menu (<nav> element)\r\n// const menuEl = document.querySelector('.menu');\r\n// const main_contentEl = document.querySelector(\"body\");\r\n\r\n// // preload the images set as data attrs in the menu items\r\n// preloader(\"img\").then(() => {\r\n// \t// initialize the smooth scroll\r\n// \t// const scroll = new LocomotiveScroll({el: menuEl, smooth: true});\r\n// \t// initialize custom cursor\r\n// \t// const cursor = new Cursor(document.querySelector('.cursor'));\r\n// \t// initialize menu\r\n// \t// new Menu(main_contentEl);\r\n// });\r\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/index.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkSITE"] = self["webpackChunkSITE"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/assets/js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	SITE = __webpack_exports__;
/******/ 	
/******/ })()
;