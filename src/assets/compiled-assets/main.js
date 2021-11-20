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

/***/ "./src/assets/js/_cursor.js":
/*!**********************************!*\
  !*** ./src/assets/js/_cursor.js ***!
  \**********************************/
/***/ (function() {

eval("const cursor = document.querySelector('.cursor')\r\nif (cursor) {\r\n\r\n\tcursor.style.opacity = 1\r\n\r\n\twindow.onmousemove = (e) => {\r\n\t\trequestAnimationFrame(() => {\r\n\t\t\tcursor.style.opacity = 1\r\n\t\t\tlet x = `${(e.pageX - scrollX - 40)}px`,\r\n\t\t\t\ty = `${(e.pageY - scrollY - 40)}px`\r\n\t\t\tcursor.style.setProperty('--top', y)\r\n\t\t\tcursor.style.setProperty('--left', x)\r\n\t\t})\r\n\t}\r\n\r\n\t// window.onmouseenter = (e) => {\r\n\t// \tconsole.log(\"enter\", e)\r\n\t// \trequestAnimationFrame(() => {\r\n\t// \t\tcursor.style.opacity = 1\r\n\t// \t})\r\n\t// }\r\n\r\n\twindow.onmouseout = (e) => {\r\n\t\trequestAnimationFrame(() => {\r\n\t\t\tcursor.style.opacity = 0\r\n\t\t})\r\n\t}\r\n\r\n\t//todo window events or speciefic events\r\n\tdocument.addEventListener('click', () => {\r\n\t\tcursor.classList.add(\"expand\")\r\n\t\tsetTimeout(() => {\r\n\t\t\tcursor.classList.remove(\"expand\")\r\n\t\t}, 600)\r\n\t})\r\n}\n\n//# sourceURL=webpack://SITE/./src/assets/js/_cursor.js?");

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

/***/ "./src/assets/js/_preloader.js":
/*!*************************************!*\
  !*** ./src/assets/js/_preloader.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"preloader\": function() { return /* binding */ preloader; }\n/* harmony export */ });\nconst imagesLoaded = __webpack_require__(/*! imagesloaded */ \"./node_modules/imagesloaded/imagesloaded.js\");\r\n\r\nconst body = document.body;\r\nconst preloader = (selector) => {\r\n\tconsole.log(\"selector\", selector);\r\n\r\n\treturn new Promise((resolve) => {\r\n\t\tconst imgwrap = document.createElement(\"div\");\r\n\t\timgwrap.style.visibility = \"hidden\";\r\n\t\tbody.appendChild(imgwrap);\r\n\r\n\t\t[...document.querySelectorAll(selector)].forEach((el) => {\r\n\t\t\tconst imgEl = document.createElement(\"img\");\r\n\t\t\timgEl.style.width = 0;\r\n\t\t\timgEl.src = el.dataset.img;\r\n\t\t\timgEl.className = \"preload\";\r\n\t\t\timgwrap.appendChild(imgEl);\r\n\t\t});\r\n\r\n\t\t[...document.getElementsByTagName(selector)].forEach((el) => {\r\n\t\t\tconsole.log(\"image elements\", el);\r\n\t\t\tel.className = \"preloader\";\r\n\t\t});\r\n\r\n\t\timagesLoaded(document.querySelectorAll(\".preloader\"), () => {\r\n\t\t\t// imgwrap.parentNode.removeChild(imgwrap);\r\n\t\t\tbody.classList.remove(\"loading\");\r\n\t\t\tresolve();\r\n\t\t});\r\n\t});\r\n};\r\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/_preloader.js?");

/***/ }),

/***/ "./src/assets/js/_test2.js":
/*!*********************************!*\
  !*** ./src/assets/js/_test2.js ***!
  \*********************************/
/***/ (function() {

eval("// create a 3 column html grid with a header with javascript\r\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/_test2.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _preloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_preloader */ \"./src/assets/js/_preloader.js\");\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/index.scss */ \"./src/assets/css/index.scss\");\n/* harmony import */ var _colors_shemes_switch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_colors-shemes-switch.js */ \"./src/assets/js/_colors-shemes-switch.js\");\n/* harmony import */ var _colors_shemes_switch_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_colors_shemes_switch_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _cursor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_cursor.js */ \"./src/assets/js/_cursor.js\");\n/* harmony import */ var _cursor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_cursor_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _test2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_test2 */ \"./src/assets/js/_test2.js\");\n/* harmony import */ var _test2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_test2__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_header.js */ \"./src/assets/js/_header.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_header_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _color_switch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_color_switch.js */ \"./src/assets/js/_color_switch.js\");\n/* harmony import */ var _color_switch_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_color_switch_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _toTopButton_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_toTopButton.js */ \"./src/assets/js/_toTopButton.js\");\n/* harmony import */ var _toTopButton_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_toTopButton_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _headroom_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_headroom.js */ \"./src/assets/js/_headroom.js\");\n/* harmony import */ var _mobile_menu_button_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_mobile_menu_button.js */ \"./src/assets/js/_mobile_menu_button.js\");\n/* harmony import */ var _startMenu_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./startMenu/index.js */ \"./src/assets/js/startMenu/index.js\");\n/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! smoothscroll-polyfill */ \"./node_modules/smoothscroll-polyfill/dist/smoothscroll.js\");\n/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_11__);\n\r\n\r\n\r\n\r\n\r\n// import css for webpack\r\n\r\n\r\n// // javscript imports\r\n\r\n\r\n\r\n\r\n// import \"./_test.js\";\r\n\r\n// import './_mapbox.js';\r\n\r\n// import './_wow.js';\r\n// import './_scrollAnker.js';\r\n// import './_carousel.js';\r\n\r\n\r\n\r\n\r\n// import './_random_color.js';\r\n\r\n\r\n// import simpleParallax from 'simple-parallax-js';\r\n\r\nsmoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_11___default().polyfill();\r\n\r\n// ///////////////////////// image Pralax ///////////////////////////////////////////////\r\n// var image = document.getElementsByClassName('thumbnail');\r\n// new simpleParallax(image);\r\n// new simpleParallax(image, {\r\n// \tscale: 1.5\r\n// });\r\n\r\n// ///////////////////////card fading scroll ///////////////////////////////////////////////\r\n// gsap.registerPlugin(ScrollTrigger);\r\n\r\n// gsap.to(\".panel:not(:last-child)\", {\r\n//   yPercent: -100,\r\n//   ease: \"none\",\r\n//   stagger: 0.5,\r\n//   scrollTrigger: {\r\n//     trigger: \"#container\",\r\n//     start: \"top top\",\r\n//     end: \"+=300%\",\r\n//     scrub: true,\r\n//     pin: true\r\n//   }\r\n// });\r\n\r\n// gsap.set(\".panel\", {zIndex: (i, target, targets) => targets.length - i});\r\n\r\n// let red_panel = document.querySelector('.red')\r\n\r\n// let red_inner = document.querySelector('.panel_inner')\r\n// // let rectCollection = red_inner.getClientRects();\r\n// const rect = red_inner.getBoundingClientRect();\r\n// console.log(`height: ${rect.height}`);\r\n\r\n// red_panel.style.height = (rect.height + 200) + 'px';\r\n\r\n// ///////////////////////preloader images ///////////////////////////////////////////////\r\n// menu (<nav> element)\r\n// const menuEl = document.querySelector('.menu');\r\n// const main_contentEl = document.querySelector(\"body\");\r\n\r\n// // preload the images set as data attrs in the menu items\r\n// preloader(\"img\").then(() => {\r\n// \tinitialize the smooth scroll\r\n// \tconst scroll = new LocomotiveScroll({el: menuEl, smooth: true});\r\n// \tinitialize custom cursor\r\n// \tconst cursor = new Cursor(document.querySelector('.cursor'));\r\n// \tinitialize menu\r\n// \tnew Menu(main_contentEl);\r\n// });\r\n\r\nsetTimeout(() => document.body.classList.add(\"render\"), 60);\r\n\r\nclass ShapeOverlays {\r\n\tconstructor(elm) {\r\n\t\tthis.elm = elm;\r\n\t\tthis.path = elm.querySelectorAll(\"path\");\r\n\t\tthis.numPoints = 18;\r\n\t\tthis.duration = 600;\r\n\t\tthis.delayPointsArray = [];\r\n\t\tthis.delayPointsMax = 300;\r\n\t\tthis.delayPerPath = 100;\r\n\t\tthis.timeStart = Date.now();\r\n\t\tthis.isOpened = false;\r\n\t\tthis.isAnimating = false;\r\n\t}\r\n\ttoggle() {\r\n\t\tthis.isAnimating = true;\r\n\t\tconst range = 4 * Math.random() + 6;\r\n\t\tfor (var i = 0; i < this.numPoints; i++) {\r\n\t\t\tconst radian = (i / (this.numPoints - 1)) * Math.PI;\r\n\t\t\tthis.delayPointsArray[i] =\r\n\t\t\t\t((Math.sin(-radian) + Math.sin(-radian * range) + 2) / 4) *\r\n\t\t\t\tthis.delayPointsMax;\r\n\t\t}\r\n\t\tif (this.isOpened === false) {\r\n\t\t\tthis.open();\r\n\t\t} else {\r\n\t\t\tthis.close();\r\n\t\t}\r\n\t}\r\n\topen() {\r\n\t\tthis.isOpened = true;\r\n\t\tthis.elm.classList.add(\"is-opened\");\r\n\t\tthis.timeStart = Date.now();\r\n\t\tthis.renderLoop();\r\n\t}\r\n\tclose() {\r\n\t\tthis.isOpened = false;\r\n\t\tthis.elm.classList.remove(\"is-opened\");\r\n\t\tthis.timeStart = Date.now();\r\n\t\tthis.renderLoop();\r\n\t}\r\n\tupdatePath(time) {\r\n\t\tconst points = [];\r\n\t\tfor (var i = 0; i < this.numPoints + 1; i++) {\r\n\t\t\tpoints[i] =\r\n\t\t\t\tease.cubicInOut(\r\n\t\t\t\t\tMath.min(\r\n\t\t\t\t\t\tMath.max(time - this.delayPointsArray[i], 0) /\r\n\t\t\t\t\t\t\tthis.duration,\r\n\t\t\t\t\t\t1\r\n\t\t\t\t\t)\r\n\t\t\t\t) * 100;\r\n\t\t}\r\n\r\n\t\tlet str = \"\";\r\n\t\tstr += this.isOpened ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `;\r\n\t\tfor (var i = 0; i < this.numPoints - 1; i++) {\r\n\t\t\tconst p = ((i + 1) / (this.numPoints - 1)) * 100;\r\n\t\t\tconst cp = p - ((1 / (this.numPoints - 1)) * 100) / 2;\r\n\t\t\tstr += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${\r\n\t\t\t\tpoints[i + 1]\r\n\t\t\t} `;\r\n\t\t}\r\n\t\tstr += this.isOpened ? `V 0 H 0` : `V 100 H 0`;\r\n\t\treturn str;\r\n\t}\r\n\trender() {\r\n\t\tif (this.isOpened) {\r\n\t\t\tfor (var i = 0; i < this.path.length; i++) {\r\n\t\t\t\tthis.path[i].setAttribute(\r\n\t\t\t\t\t\"d\",\r\n\t\t\t\t\tthis.updatePath(\r\n\t\t\t\t\t\tDate.now() - (this.timeStart + this.delayPerPath * i)\r\n\t\t\t\t\t)\r\n\t\t\t\t);\r\n\t\t\t}\r\n\t\t} else {\r\n\t\t\tfor (var i = 0; i < this.path.length; i++) {\r\n\t\t\t\tthis.path[i].setAttribute(\r\n\t\t\t\t\t\"d\",\r\n\t\t\t\t\tthis.updatePath(\r\n\t\t\t\t\t\tDate.now() -\r\n\t\t\t\t\t\t\t(this.timeStart +\r\n\t\t\t\t\t\t\t\tthis.delayPerPath * (this.path.length - i - 1))\r\n\t\t\t\t\t)\r\n\t\t\t\t);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\trenderLoop() {\r\n\t\tthis.render();\r\n\t\tif (\r\n\t\t\tDate.now() - this.timeStart <\r\n\t\t\tthis.duration +\r\n\t\t\t\tthis.delayPerPath * (this.path.length - 1) +\r\n\t\t\t\tthis.delayPointsMax\r\n\t\t) {\r\n\t\t\trequestAnimationFrame(() => {\r\n\t\t\t\tthis.renderLoop();\r\n\t\t\t});\r\n\t\t} else {\r\n\t\t\tthis.isAnimating = false;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n(function () {\r\n\tconst elmHamburger = document.querySelector(\".hamburger\");\r\n\tconst gNav = document.querySelector(\".global-menu\");\r\n\tconst gNavItems = document.querySelectorAll(\".global-menu__item\");\r\n\tconst elmOverlay = document.querySelector(\".shape-overlays\");\r\n\tconst overlay = new ShapeOverlays(elmOverlay);\r\n\r\n\telmHamburger.addEventListener(\"click\", () => {\r\n\t\tif (overlay.isAnimating) {\r\n\t\t\treturn false;\r\n\t\t}\r\n\t\toverlay.toggle();\r\n\t\tif (overlay.isOpened === true) {\r\n\t\t\tgNav.classList.add(\"is-opened\");\r\n\t\t\telmHamburger.classList.add(\"is-opened-navi\");\r\n\t\t\tfor (var i = 0; i < gNavItems.length; i++) {\r\n\t\t\t\tgNavItems[i].classList.add(\"is-opened\");\r\n\t\t\t}\r\n\t\t} else {\r\n\t\t\tgNav.classList.remove(\"is-opened\");\r\n\t\t\telmHamburger.classList.remove(\"is-opened-navi\");\r\n\t\t\tfor (var i = 0; i < gNavItems.length; i++) {\r\n\t\t\t\tgNavItems[i].classList.remove(\"is-opened\");\r\n\t\t\t}\r\n\t\t}\r\n\t});\r\n})();\r\n\r\nconst ease = {\r\n\texponentialIn: (t) => {\r\n\t\treturn t == 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));\r\n\t},\r\n\texponentialOut: (t) => {\r\n\t\treturn t == 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);\r\n\t},\r\n\texponentialInOut: (t) => {\r\n\t\treturn t == 0.0 || t == 1.0\r\n\t\t\t? t\r\n\t\t\t: t < 0.5\r\n\t\t\t? +0.5 * Math.pow(2.0, 20.0 * t - 10.0)\r\n\t\t\t: -0.5 * Math.pow(2.0, 10.0 - t * 20.0) + 1.0;\r\n\t},\r\n\tsineOut: (t) => {\r\n\t\tconst HALF_PI = 1.5707963267948966;\r\n\t\treturn Math.sin(t * HALF_PI);\r\n\t},\r\n\tcircularInOut: (t) => {\r\n\t\treturn t < 0.5\r\n\t\t\t? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t))\r\n\t\t\t: 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);\r\n\t},\r\n\tcubicIn: (t) => {\r\n\t\treturn t * t * t;\r\n\t},\r\n\tcubicOut: (t) => {\r\n\t\tconst f = t - 1.0;\r\n\t\treturn f * f * f + 1.0;\r\n\t},\r\n\tcubicInOut: (t) => {\r\n\t\treturn t < 0.5\r\n\t\t\t? 4.0 * t * t * t\r\n\t\t\t: 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;\r\n\t},\r\n\tquadraticOut: (t) => {\r\n\t\treturn -t * (t - 2.0);\r\n\t},\r\n\tquarticOut: (t) => {\r\n\t\treturn Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;\r\n\t},\r\n};\r\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/index.js?");

/***/ }),

/***/ "./src/assets/js/startMenu/index.js":
/*!******************************************!*\
  !*** ./src/assets/js/startMenu/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/assets/js/startMenu/menu.js\");\n\r\n\r\nconst menu = document.querySelectorAll(\".menu\");\r\nmenu.forEach((menuEl) => {\r\n\tnew _menu__WEBPACK_IMPORTED_MODULE_0__.default(menuEl);\r\n\tconsole.log(\"menuEl initilizrd\");\r\n});\r\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/startMenu/index.js?");

/***/ }),

/***/ "./src/assets/js/startMenu/menu.js":
/*!*****************************************!*\
  !*** ./src/assets/js/startMenu/menu.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var _menuItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuItem */ \"./src/assets/js/startMenu/menuItem.js\");\n\r\n\r\n\r\nclass Menu {\r\n\tconstructor(el) {\r\n\t\t// el is the menu element (<nav>)\r\n\t\tconsole.log(el);\r\n\t\tthis.DOM = { el: el };\r\n\t\t// the menu item elements (<a>)\r\n\t\tthis.DOM.menuItems = this.DOM.el.querySelectorAll(\".menu__item\");\r\n\t\t// menu item properties that will animate as we move the mouse around the menu\r\n\t\t// we will be using interpolation to achieve smooth animations.\r\n\t\t// the “previous” and “current” values are the values to interpolate.\r\n\t\t// the value applied to the element, this case the image element (this.DOM.reveal) will be a value between these two values at a specific increment.\r\n\t\t// the amt is the amount to interpolate.\r\n\t\tthis.animatableProperties = {\r\n\t\t\t// translationX\r\n\t\t\ttx: { previous: 0, current: 0, amt: 0.08 },\r\n\t\t\t// translationY\r\n\t\t\tty: { previous: 0, current: 0, amt: 0.08 },\r\n\t\t\t// Rotation angle\r\n\t\t\trotation: { previous: 0, current: 0, amt: 0.08 },\r\n\t\t\t// CSS filter (brightness) value\r\n\t\t\tbrightness: { previous: 1, current: 1, amt: 0.08 },\r\n\t\t};\r\n\t\t// array of MenuItem instances\r\n\t\tthis.menuItems = [];\r\n\t\t// initialize the MenuItems\r\n\t\t[...this.DOM.menuItems].forEach((item, pos) =>\r\n\t\t\tthis.menuItems.push(\r\n\t\t\t\tnew _menuItem__WEBPACK_IMPORTED_MODULE_0__.default(item, pos, this.animatableProperties)\r\n\t\t\t)\r\n\t\t);\r\n\t\t// show the menu items (initial animation where each menu item gets revealed)\r\n\t\tthis.showMenuItems();\r\n\t}\r\n\t// initial animation for revealing the menu items\r\n\tshowMenuItems() {\r\n\t\tgsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to(\r\n\t\t\tthis.menuItems.map((item, index) => item.DOM.textInner),\r\n\t\t\t{\r\n\t\t\t\tduration: (index) => index + 1 * 16.2,\r\n\t\t\t\tease: \"Expo.easeOut\",\r\n\t\t\t\tstartAt: { y: \"100%\" },\r\n\t\t\t\ty: 0,\r\n\t\t\t\tdelay: (pos) => pos * 0.08,\r\n\t\t\t}\r\n\t\t);\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/startMenu/menu.js?");

/***/ }),

/***/ "./src/assets/js/startMenu/menuItem.js":
/*!*********************************************!*\
  !*** ./src/assets/js/startMenu/menuItem.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MenuItem; }\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/assets/js/startMenu/utils.js\");\n\r\n\r\n// const images = Object.entries(require(\"../images/photography/black/*.jpg\"));\r\nconst object1 = {\r\n\t0: \"/assets/images/photography/blacker/photography_blackerthandays_001.jpg\",\r\n\t1: \"/assets/images/photography/blacker/photography_blackerthandays_001.jpg\",\r\n\t2: \"/assets/images/photography/blingbling/bling_bling_009.gif\",\r\n\t3: \"/assets/images/photography/hurricane/IMG_0532.jpg\",\r\n\t4: \"/assets/images/photography/newyork/PICT6156_fhdr.jpg\",\r\n\t5: \"/assets/images/photography/black/Black_006.jpg\",\r\n\t6: \"/assets/images/photography/black/Black_007.jpg\",\r\n\t7: \"/assets/images/photography/black/Black_008.jpg\",\r\n\t8: \"/assets/images/photography/black/Black_009.jpg\",\r\n\t9: \"/assets/images/photography/black/Black_010.jpg\",\r\n\t10: \"/assets/images/photography/black/Black_011.jpg\",\r\n\t11: \"/assets/images/photography/black/Black_012.jpg\",\r\n\t12: \"/assets/images/photography/black/Black_013.jpg\",\r\n\t13: \"/assets/images/photography/black/Black_014.jpg\",\r\n\t14: \"/assets/images/photography/black/Black_015.jpg\",\r\n\t15: \"/assets/images/photography/black/Black_016.jpg\",\r\n\t16: \"/assets/images/photography/black/Black_017.jpg\",\r\n\t17: \"/assets/images/photography/black/Black_018.jpg\",\r\n\t18: \"/assets/images/photography/black/Black_019.jpg\",\r\n\t19: \"/assets/images/photography/black/Black_020.jpg\",\r\n};\r\n\r\nconst images = Object.entries(object1);\r\n\r\n// track the mouse position\r\nlet mousepos = { x: 0, y: 0 };\r\n// cache the mouse position\r\nlet mousePosCache = mousepos;\r\n// the mouse move direction\r\nlet direction = {\r\n\tx: mousePosCache.x - mousepos.x,\r\n\ty: mousePosCache.y - mousepos.y,\r\n};\r\n\r\n// update mouse position when moving the mouse\r\nwindow.addEventListener(\"mousemove\", (ev) => (mousepos = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getMousePos)(ev)));\r\n\r\nclass MenuItem {\r\n\tconstructor(el, inMenuPosition, animatableProperties) {\r\n\t\t// el is the <a> with class \"menu__item\"\r\n\t\tthis.DOM = { el: el };\r\n\t\t// position in the Menu\r\n\t\tthis.inMenuPosition = inMenuPosition;\r\n\t\t// menu item properties that will animate as we move the mouse around the menu\r\n\t\tthis.animatableProperties = animatableProperties;\r\n\t\t// the item text\r\n\t\tthis.DOM.textInner = this.DOM.el.querySelector(\".menu__item-textinner\");\r\n\t\t// create the image structure\r\n\t\tthis.layout();\r\n\t\t// initialize some events\r\n\t\tthis.initEvents();\r\n\t}\r\n\t// create the image structure\r\n\t// we want to add/append to the menu item the following html:\r\n\t// <div class=\"hover-reveal\">\r\n\t//   <div class=\"hover-reveal__inner\" style=\"overflow: hidden;\">\r\n\t//     <div class=\"hover-reveal__img\" style=\"background-image: url(pathToImage);\">\r\n\t//     </div>\r\n\t//   </div>\r\n\t// </div>\r\n\tlayout() {\r\n\t\t// this is the element that gets its position animated (and perhaps other properties like the rotation etc..)\r\n\t\tthis.DOM.reveal = document.createElement(\"div\");\r\n\t\tthis.DOM.reveal.className = \"hover-reveal\";\r\n\t\t// the next two elements could actually be only one, the image element\r\n\t\t// adding an extra wrapper (revealInner) around the image element with overflow hidden, gives us the possibility to scale the image inside\r\n\t\tthis.DOM.revealInner = document.createElement(\"div\");\r\n\t\tthis.DOM.revealInner.className = \"hover-reveal__inner\";\r\n\t\tthis.DOM.revealImage = document.createElement(\"div\");\r\n\t\tthis.DOM.revealImage.className = \"hover-reveal__img\";\r\n\t\tthis.DOM.revealImage.style.backgroundImage = `url(${\r\n\t\t\timages[this.inMenuPosition][1]\r\n\t\t})`;\r\n\r\n\t\tthis.DOM.revealInner.appendChild(this.DOM.revealImage);\r\n\t\tthis.DOM.reveal.appendChild(this.DOM.revealInner);\r\n\t\tthis.DOM.el.appendChild(this.DOM.reveal);\r\n\t}\r\n\t// calculate the position/size of both the menu item and reveal element\r\n\tcalcBounds() {\r\n\t\tthis.bounds = {\r\n\t\t\tel: this.DOM.el.getBoundingClientRect(),\r\n\t\t\treveal: this.DOM.reveal.getBoundingClientRect(),\r\n\t\t};\r\n\t}\r\n\t// bind some events\r\n\tinitEvents() {\r\n\t\tthis.mouseenterFn = (ev) => {\r\n\t\t\t// show the image element\r\n\t\t\tthis.showImage();\r\n\t\t\tthis.firstRAFCycle = true;\r\n\t\t\t// start the render loop animation (rAF)\r\n\t\t\tthis.loopRender();\r\n\t\t};\r\n\t\tthis.mouseleaveFn = () => {\r\n\t\t\t// stop the render loop animation (rAF)\r\n\t\t\tthis.stopRendering();\r\n\t\t\t// hide the image element\r\n\t\t\tthis.hideImage();\r\n\t\t};\r\n\r\n\t\tthis.DOM.el.addEventListener(\"mouseenter\", this.mouseenterFn);\r\n\t\tthis.DOM.el.addEventListener(\"mouseleave\", this.mouseleaveFn);\r\n\t}\r\n\t// show the image element\r\n\tshowImage() {\r\n\t\t// kill any current tweens\r\n\t\tgsap__WEBPACK_IMPORTED_MODULE_1__.gsap.killTweensOf(this.DOM.revealInner);\r\n\t\tgsap__WEBPACK_IMPORTED_MODULE_1__.gsap.killTweensOf(this.DOM.revealImage);\r\n\r\n\t\tthis.tl = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({\r\n\t\t\t\tonStart: () => {\r\n\t\t\t\t\t// show the image element\r\n\t\t\t\t\tthis.DOM.reveal.style.opacity = 1;\r\n\t\t\t\t\t// set a high z-index value so image appears on top of other elements\r\n\t\t\t\t\tgsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set(this.DOM.el, { zIndex: images.length });\r\n\t\t\t\t},\r\n\t\t\t})\r\n\t\t\t// animate the image wrap\r\n\t\t\t.to(this.DOM.revealInner, 0.2, {\r\n\t\t\t\tease: \"Sine.easeOut\",\r\n\t\t\t\tstartAt: { x: direction.x < 0 ? \"-100%\" : \"100%\" },\r\n\t\t\t\tx: \"0%\",\r\n\t\t\t})\r\n\t\t\t// animate the image element\r\n\t\t\t.to(\r\n\t\t\t\tthis.DOM.revealImage,\r\n\t\t\t\t0.2,\r\n\t\t\t\t{\r\n\t\t\t\t\tease: \"Sine.easeOut\",\r\n\t\t\t\t\tstartAt: { x: direction.x < 0 ? \"100%\" : \"-100%\" },\r\n\t\t\t\t\tx: \"0%\",\r\n\t\t\t\t},\r\n\t\t\t\t0\r\n\t\t\t);\r\n\t}\r\n\t// hide the image element\r\n\thideImage() {\r\n\t\t// kill any current tweens\r\n\t\tgsap__WEBPACK_IMPORTED_MODULE_1__.gsap.killTweensOf(this.DOM.revealInner);\r\n\t\tgsap__WEBPACK_IMPORTED_MODULE_1__.gsap.killTweensOf(this.DOM.revealImage);\r\n\r\n\t\tthis.tl = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({\r\n\t\t\t\tonStart: () => {\r\n\t\t\t\t\tgsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set(this.DOM.el, { zIndex: 1 });\r\n\t\t\t\t},\r\n\t\t\t\tonComplete: () => {\r\n\t\t\t\t\tgsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set(this.DOM.reveal, { opacity: 0 });\r\n\t\t\t\t},\r\n\t\t\t})\r\n\t\t\t.to(this.DOM.revealInner, 0.2, {\r\n\t\t\t\tease: \"Sine.easeOut\",\r\n\t\t\t\tx: direction.x < 0 ? \"100%\" : \"-100%\",\r\n\t\t\t})\r\n\t\t\t.to(\r\n\t\t\t\tthis.DOM.revealImage,\r\n\t\t\t\t0.2,\r\n\t\t\t\t{\r\n\t\t\t\t\tease: \"Sine.easeOut\",\r\n\t\t\t\t\tx: direction.x < 0 ? \"-100%\" : \"100%\",\r\n\t\t\t\t},\r\n\t\t\t\t0\r\n\t\t\t);\r\n\t}\r\n\t// start the render loop animation (rAF)\r\n\tloopRender() {\r\n\t\tif (!this.requestId) {\r\n\t\t\tthis.requestId = requestAnimationFrame(() => this.render());\r\n\t\t}\r\n\t}\r\n\t// stop the render loop animation (rAF)\r\n\tstopRendering() {\r\n\t\tif (this.requestId) {\r\n\t\t\twindow.cancelAnimationFrame(this.requestId);\r\n\t\t\tthis.requestId = undefined;\r\n\t\t}\r\n\t}\r\n\t// translate the item as the mouse moves\r\n\trender() {\r\n\t\tthis.requestId = undefined;\r\n\t\t// calculate position/sizes the first time\r\n\t\tif (this.firstRAFCycle) {\r\n\t\t\tthis.calcBounds();\r\n\t\t}\r\n\r\n\t\t// calculate the mouse distance (current vs previous cycle)\r\n\t\tconst mouseDistanceX = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(\r\n\t\t\tMath.abs(mousePosCache.x - mousepos.x),\r\n\t\t\t0,\r\n\t\t\t100\r\n\t\t);\r\n\t\t// direction where the mouse is moving\r\n\t\tdirection = {\r\n\t\t\tx: mousePosCache.x - mousepos.x,\r\n\t\t\ty: mousePosCache.y - mousepos.y,\r\n\t\t};\r\n\t\t// updated cache values\r\n\t\tmousePosCache = { x: mousepos.x, y: mousepos.y };\r\n\r\n\t\t// new translation values\r\n\t\t// the center of the image element is positioned where the mouse is\r\n\t\tthis.animatableProperties.tx.current =\r\n\t\t\tMath.abs(mousepos.x - this.bounds.el.left) -\r\n\t\t\tthis.bounds.reveal.width / 2;\r\n\r\n\t\tthis.animatableProperties.ty.current =\r\n\t\t\tMath.abs(mousepos.y - this.bounds.el.top) -\r\n\t\t\tthis.bounds.reveal.height / 2 -\r\n\t\t\tscrollY;\r\n\r\n\t\t// new rotation value\r\n\t\tthis.animatableProperties.rotation.current = this.firstRAFCycle\r\n\t\t\t? 0\r\n\t\t\t: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.map)(mouseDistanceX, 0, 100, 0, direction.x < 0 ? 60 : -60);\r\n\t\t// new filter value\r\n\t\tthis.animatableProperties.brightness.current = this.firstRAFCycle\r\n\t\t\t? 1\r\n\t\t\t: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.map)(mouseDistanceX, 0, 100, 1, 4);\r\n\r\n\t\t// set up the interpolated values\r\n\t\t// for the first cycle, both the interpolated values need to be the same so there's no \"lerped\" animation between the previous and current state\r\n\t\tthis.animatableProperties.tx.previous = this.firstRAFCycle\r\n\t\t\t? this.animatableProperties.tx.current\r\n\t\t\t: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.lerp)(\r\n\t\t\t\t\tthis.animatableProperties.tx.previous,\r\n\t\t\t\t\tthis.animatableProperties.tx.current,\r\n\t\t\t\t\tthis.animatableProperties.tx.amt\r\n\t\t\t  );\r\n\t\tthis.animatableProperties.ty.previous = this.firstRAFCycle\r\n\t\t\t? this.animatableProperties.ty.current\r\n\t\t\t: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.lerp)(\r\n\t\t\t\t\tthis.animatableProperties.ty.previous,\r\n\t\t\t\t\tthis.animatableProperties.ty.current,\r\n\t\t\t\t\tthis.animatableProperties.ty.amt\r\n\t\t\t  );\r\n\t\tthis.animatableProperties.rotation.previous = this.firstRAFCycle\r\n\t\t\t? this.animatableProperties.rotation.current\r\n\t\t\t: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.lerp)(\r\n\t\t\t\t\tthis.animatableProperties.rotation.previous,\r\n\t\t\t\t\tthis.animatableProperties.rotation.current,\r\n\t\t\t\t\tthis.animatableProperties.rotation.amt\r\n\t\t\t  );\r\n\t\tthis.animatableProperties.brightness.previous = this.firstRAFCycle\r\n\t\t\t? this.animatableProperties.brightness.current\r\n\t\t\t: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.lerp)(\r\n\t\t\t\t\tthis.animatableProperties.brightness.previous,\r\n\t\t\t\t\tthis.animatableProperties.brightness.current,\r\n\t\t\t\t\tthis.animatableProperties.brightness.amt\r\n\t\t\t  );\r\n\r\n\t\t// set styles\r\n\t\tgsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set(this.DOM.reveal, {\r\n\t\t\tx: this.animatableProperties.tx.previous,\r\n\t\t\ty: this.animatableProperties.ty.previous,\r\n\t\t\trotation: this.animatableProperties.rotation.previous,\r\n\t\t\tfilter: `brightness(${this.animatableProperties.brightness.previous})`,\r\n\t\t});\r\n\r\n\t\t// loop\r\n\t\tthis.firstRAFCycle = false;\r\n\t\tthis.loopRender();\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/startMenu/menuItem.js?");

/***/ }),

/***/ "./src/assets/js/startMenu/utils.js":
/*!******************************************!*\
  !*** ./src/assets/js/startMenu/utils.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"map\": function() { return /* binding */ map; },\n/* harmony export */   \"lerp\": function() { return /* binding */ lerp; },\n/* harmony export */   \"clamp\": function() { return /* binding */ clamp; },\n/* harmony export */   \"getMousePos\": function() { return /* binding */ getMousePos; }\n/* harmony export */ });\n// Map number x from range [a, b] to [c, d]\r\nconst map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;\r\n\r\n// Linear interpolation\r\nconst lerp = (a, b, n) => (1 - n) * a + n * b;\r\n\r\nconst clamp = (num, min, max) => (num <= min ? min : num >= max ? max : num);\r\n\r\n// Gets the mouse position\r\nconst getMousePos = (e) => {\r\n\tlet posx = 0;\r\n\tlet posy = 0;\r\n\tif (!e) e = window.event;\r\n\tif (e.pageX || e.pageY) {\r\n\t\tposx = e.pageX;\r\n\t\tposy = e.pageY;\r\n\t} else if (e.clientX || e.clientY) {\r\n\t\tposx =\r\n\t\t\te.clientX + body.scrollLeft + document.documentElement.scrollLeft;\r\n\t\tposy = e.clientY + body.scrollTop + document.documentElement.scrollTop;\r\n\t}\r\n\r\n\treturn { x: posx, y: posy };\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/startMenu/utils.js?");

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