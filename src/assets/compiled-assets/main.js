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

eval("let colorswitch = document\n\t.querySelectorAll(\".themeingbutton\")\n\t.forEach((elem) => {\n\t\telem.onclick = (e) => {\n\t\t\tvar doc = document.firstElementChild;\n\t\t\tif (doc.getAttribute(\"color-scheme\") == \"dark\") {\n\t\t\t\tdoc.setAttribute(\"color-scheme\", \"light\");\n\t\t\t} else if (doc.getAttribute(\"color-scheme\") == \"light\") {\n\t\t\t\tdoc.setAttribute(\"color-scheme\", \"dark\");\n\t\t\t} else if (doc.getAttribute(\"color-scheme\") == \"default\") {\n\t\t\t\tdoc.setAttribute(\"color-scheme\", \"light\");\n\t\t\t} else {\n\t\t\t\tdoc.setAttribute(\"color-scheme\", \"dark\");\n\t\t\t}\n\t\t};\n\t});\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/_color_switch.js?");

/***/ }),

/***/ "./src/assets/js/_colors-shemes-switch.js":
/*!************************************************!*\
  !*** ./src/assets/js/_colors-shemes-switch.js ***!
  \************************************************/
/***/ (function() {

eval("const switcher = document.querySelectorAll('#theme-switcher').forEach(el => {\n\n\tconst doc = document.firstElementChild\n\n\tel.addEventListener('input', e =>\n\t\tsetTheme(e.target.value))\n\n\tconst setTheme = theme =>\n\t\tdoc.setAttribute('color-scheme', theme)\n\t// doc.classList.add('color-scheme');\n});\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/_colors-shemes-switch.js?");

/***/ }),

/***/ "./src/assets/js/_header.js":
/*!**********************************!*\
  !*** ./src/assets/js/_header.js ***!
  \**********************************/
/***/ (function() {

eval("// import Headroom from \"headroom.js\";\n// grab an element\n// var scroll_direction = document.querySelector(\".has-scroll-init\");\n// var htmlelm = document.querySelector(\"html\");\n// // console.log(\"scroll_direction\", scroll_direction.dataset.direction)\n// console.log(\"htmlelm\", htmlelm)\n\n// window.onscroll = () => {\n// \tconsole.log(\"scroll_direction\")\n// }\n\n// // construct an instance of Headroom, passing the element\n// var headroom = new Headroom(myElement);\n// // initialise\n// headroom.init();\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/_header.js?");

/***/ }),

/***/ "./src/assets/js/_headroom.js":
/*!************************************!*\
  !*** ./src/assets/js/_headroom.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! headroom.js */ \"./node_modules/headroom.js/dist/headroom.js\");\n/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(headroom_js__WEBPACK_IMPORTED_MODULE_0__);\n// if you're using a bundler, first import:\n\n// grab an element\nvar elems = document.querySelectorAll('.header')\n// var myElement = document.querySelector(\"header\");\n// construct an instance of Headroom, passing the element\nelems.forEach((elem) => {\n    var headroom  = new (headroom_js__WEBPACK_IMPORTED_MODULE_0___default())(elem);\n    // initialise\n    headroom.init();\n})\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/_headroom.js?");

/***/ }),

/***/ "./src/assets/js/_preloader.js":
/*!*************************************!*\
  !*** ./src/assets/js/_preloader.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"preloader\": function() { return /* binding */ preloader; }\n/* harmony export */ });\nconst imagesLoaded = __webpack_require__(/*! imagesloaded */ \"./node_modules/imagesloaded/imagesloaded.js\");\n\nconst body = document.body;\nconst preloader = selector => {\n    console.log('selector', selector)\n\n    return new Promise(resolve => {\n\n        // const imgwrap = document.createElement('div');\n        // imgwrap.style.visibility = 'hidden';\n        // body.appendChild(imgwrap);\n\n        // [...document.querySelectorAll(selector)].forEach(el => {\n        //     const imgEl = document.createElement('img');\n        //     imgEl.style.width = 0;\n        //     imgEl.src = el.dataset.img;\n        //     imgEl.className = 'preload';\n        //     imgwrap.appendChild(imgEl);\n        // });\n\n        [...document.getElementsByTagName(selector)].forEach(el => {\n\n            console.log('image elements', el)\n            el.className = 'preloader';\n        });\n\n\n        imagesLoaded(document.querySelectorAll('.preloader'), () => {\n            // imgwrap.parentNode.removeChild(imgwrap);\n            body.classList.remove('loading');\n            resolve();\n        });\n\n    });\n};\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/_preloader.js?");

/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _preloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_preloader */ \"./src/assets/js/_preloader.js\");\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/index.scss */ \"./src/assets/css/index.scss\");\n/* harmony import */ var _colors_shemes_switch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_colors-shemes-switch.js */ \"./src/assets/js/_colors-shemes-switch.js\");\n/* harmony import */ var _colors_shemes_switch_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_colors_shemes_switch_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_header.js */ \"./src/assets/js/_header.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_header_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _color_switch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_color_switch.js */ \"./src/assets/js/_color_switch.js\");\n/* harmony import */ var _color_switch_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_color_switch_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _headroom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_headroom.js */ \"./src/assets/js/_headroom.js\");\n// import { gsap } from 'gsap'\n// import { ScrollTrigger } from 'gsap/ScrollTrigger'\n\n\n\n// import css for webpack\n\n// // javscript imports\n\n\n// import \"./_cursor.js\";\n// // import './_test.js';\n\n// import './_mapbox.js';\n\n// import './_wow.js';\n// import './_scrollAnker.js';\n// import './_carousel.js';\n// import './_toTopButton.js';\n\n// import './_mobile_menu_button.js';\n// import './_random_color.js';\n// import smoothscroll from 'smoothscroll-polyfill'\n\n// import simpleParallax from 'simple-parallax-js';\n\n// smoothscroll.polyfill()\n\n// ///////////////////////// image Pralax ///////////////////////////////////////////////\n// var image = document.getElementsByClassName('thumbnail');\n// new simpleParallax(image);\n// new simpleParallax(image, {\n// \tscale: 1.5\n// });\n\n/////////////////////////card fading scroll ///////////////////////////////////////////////\n// gsap.registerPlugin(ScrollTrigger);\n\n// gsap.to(\".panel:not(:last-child)\", {\n//   yPercent: -100,\n//   ease: \"none\",\n//   stagger: 0.5,\n//   scrollTrigger: {\n//     trigger: \"#container\",\n//     start: \"top top\",\n//     end: \"+=300%\",\n//     scrub: true,\n//     pin: true\n//   }\n// });\n\n// gsap.set(\".panel\", {zIndex: (i, target, targets) => targets.length - i});\n\n// let red_panel = document.querySelector('.red')\n\n// let red_inner = document.querySelector('.panel_inner')\n// // let rectCollection = red_inner.getClientRects();\n// const rect = red_inner.getBoundingClientRect();\n// console.log(`height: ${rect.height}`);\n\n// red_panel.style.height = (rect.height + 200) + 'px';\n\n/////////////////////////preloader images ///////////////////////////////////////////////\n// menu (<nav> element)\n// const menuEl = document.querySelector('.menu');\nconst main_contentEl = document.querySelector(\"body\");\n\n// preload the images set as data attrs in the menu items\n(0,_preloader__WEBPACK_IMPORTED_MODULE_0__.preloader)(\"img\").then(() => {\n\t// initialize the smooth scroll\n\t// const scroll = new LocomotiveScroll({el: menuEl, smooth: true});\n\t// initialize custom cursor\n\t// const cursor = new Cursor(document.querySelector('.cursor'));\n\t// initialize menu\n\t// new Menu(main_contentEl);\n});\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/index.js?");

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