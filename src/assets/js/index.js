import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { preloader } from "./_preloader";

// import css for webpack
import "../css/index.scss";

// // javscript imports

import "./_colors-shemes-switch.js";
import "./_cursor.js";
import "./_test2";
// import "./_test.js";
import "./_header.js";
// import './_mapbox.js';
import "./_color_switch.js";
// import './_wow.js';
// import './_scrollAnker.js';
// import './_carousel.js';
import "./_toTopButton.js";
import "./_headroom.js";
import "./_mobile_menu_button.js";
import "./startMenu/index.js";
import "./bubbles/index";
import "./bubbles/index2";
import "./portfolio_slider/index.js";
// import './_random_color.js';
import smoothscroll from "smoothscroll-polyfill";

// import simpleParallax from 'simple-parallax-js';

smoothscroll.polyfill();

// ///////////////////////// image Pralax ///////////////////////////////////////////////
// var image = document.getElementsByClassName('thumbnail');
// new simpleParallax(image);
// new simpleParallax(image, {
// 	scale: 1.5
// });

// ///////////////////////card fading scroll ///////////////////////////////////////////////
// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".panel:not(:last-child)", {
//   yPercent: -100,
//   ease: "none",
//   stagger: 0.5,
//   scrollTrigger: {
//     trigger: "#container",
//     start: "top top",
//     end: "+=300%",
//     scrub: true,
//     pin: true
//   }
// });

// gsap.set(".panel", {zIndex: (i, target, targets) => targets.length - i});

// let red_panel = document.querySelector('.red')

// let red_inner = document.querySelector('.panel_inner')
// // let rectCollection = red_inner.getClientRects();
// const rect = red_inner.getBoundingClientRect();
// console.log(`height: ${rect.height}`);

// red_panel.style.height = (rect.height + 200) + 'px';

// ///////////////////////preloader images ///////////////////////////////////////////////
// menu (<nav> element)
// const menuEl = document.querySelector('.menu');
// const main_contentEl = document.querySelector("body");

// // preload the images set as data attrs in the menu items
// preloader("img").then(() => {
// 	initialize the smooth scroll
// 	const scroll = new LocomotiveScroll({el: menuEl, smooth: true});
// 	initialize custom cursor
// 	const cursor = new Cursor(document.querySelector('.cursor'));
// 	initialize menu
// 	new Menu(main_contentEl);
// });

setTimeout(() => document.body.classList.add("render"), 60);

class ShapeOverlays {
	constructor(elm) {
		this.elm = elm;
		this.path = elm.querySelectorAll("path");
		this.numPoints = 18;
		this.duration = 600;
		this.delayPointsArray = [];
		this.delayPointsMax = 300;
		this.delayPerPath = 100;
		this.timeStart = Date.now();
		this.isOpened = false;
		this.isAnimating = false;
	}
	toggle() {
		this.isAnimating = true;
		const range = 4 * Math.random() + 6;
		for (var i = 0; i < this.numPoints; i++) {
			const radian = (i / (this.numPoints - 1)) * Math.PI;
			this.delayPointsArray[i] =
				((Math.sin(-radian) + Math.sin(-radian * range) + 2) / 4) *
				this.delayPointsMax;
		}
		if (this.isOpened === false) {
			this.open();
		} else {
			this.close();
		}
	}
	open() {
		this.isOpened = true;
		this.elm.classList.add("is-opened");
		this.timeStart = Date.now();
		this.renderLoop();
	}
	close() {
		this.isOpened = false;
		this.elm.classList.remove("is-opened");
		this.timeStart = Date.now();
		this.renderLoop();
	}
	updatePath(time) {
		const points = [];
		for (var i = 0; i < this.numPoints + 1; i++) {
			points[i] =
				ease.cubicInOut(
					Math.min(
						Math.max(time - this.delayPointsArray[i], 0) /
							this.duration,
						1
					)
				) * 100;
		}

		let str = "";
		str += this.isOpened ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `;
		for (var i = 0; i < this.numPoints - 1; i++) {
			const p = ((i + 1) / (this.numPoints - 1)) * 100;
			const cp = p - ((1 / (this.numPoints - 1)) * 100) / 2;
			str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${
				points[i + 1]
			} `;
		}
		str += this.isOpened ? `V 0 H 0` : `V 100 H 0`;
		return str;
	}
	render() {
		if (this.isOpened) {
			for (var i = 0; i < this.path.length; i++) {
				this.path[i].setAttribute(
					"d",
					this.updatePath(
						Date.now() - (this.timeStart + this.delayPerPath * i)
					)
				);
			}
		} else {
			for (var i = 0; i < this.path.length; i++) {
				this.path[i].setAttribute(
					"d",
					this.updatePath(
						Date.now() -
							(this.timeStart +
								this.delayPerPath * (this.path.length - i - 1))
					)
				);
			}
		}
	}
	renderLoop() {
		this.render();
		if (
			Date.now() - this.timeStart <
			this.duration +
				this.delayPerPath * (this.path.length - 1) +
				this.delayPointsMax
		) {
			requestAnimationFrame(() => {
				this.renderLoop();
			});
		} else {
			this.isAnimating = false;
		}
	}
}

(function () {
	const elmHamburger = document.querySelector(".hamburger");
	const gNav = document.querySelector(".global-menu");
	const gNavItems = document.querySelectorAll(".global-menu__item");
	const elmOverlay = document.querySelector(".shape-overlays");
	const overlay = new ShapeOverlays(elmOverlay);

	elmHamburger.addEventListener("click", () => {
		if (overlay.isAnimating) {
			return false;
		}
		overlay.toggle();
		if (overlay.isOpened === true) {
			gNav.classList.add("is-opened");
			elmHamburger.classList.add("is-opened-navi");
			for (var i = 0; i < gNavItems.length; i++) {
				gNavItems[i].classList.add("is-opened");
			}
		} else {
			gNav.classList.remove("is-opened");
			elmHamburger.classList.remove("is-opened-navi");
			for (var i = 0; i < gNavItems.length; i++) {
				gNavItems[i].classList.remove("is-opened");
			}
		}
	});
})();

const ease = {
	exponentialIn: (t) => {
		return t == 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
	},
	exponentialOut: (t) => {
		return t == 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
	},
	exponentialInOut: (t) => {
		return t == 0.0 || t == 1.0
			? t
			: t < 0.5
			? +0.5 * Math.pow(2.0, 20.0 * t - 10.0)
			: -0.5 * Math.pow(2.0, 10.0 - t * 20.0) + 1.0;
	},
	sineOut: (t) => {
		const HALF_PI = 1.5707963267948966;
		return Math.sin(t * HALF_PI);
	},
	circularInOut: (t) => {
		return t < 0.5
			? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t))
			: 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
	},
	cubicIn: (t) => {
		return t * t * t;
	},
	cubicOut: (t) => {
		const f = t - 1.0;
		return f * f * f + 1.0;
	},
	cubicInOut: (t) => {
		return t < 0.5
			? 4.0 * t * t * t
			: 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
	},
	quadraticOut: (t) => {
		return -t * (t - 2.0);
	},
	quarticOut: (t) => {
		return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
	},
};
