// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// import { preloader } from "./_preloader";

// import css for webpack
import "../css/index.scss";
// // javscript imports

import "./_colors-shemes-switch.js";
// import "./_cursor.js";
// // import './_test.js';
import "./_header.js";
// import './_mapbox.js';
import "./_color_switch.js";
// import './_wow.js';
// import './_scrollAnker.js';
// import './_carousel.js';
// import './_toTopButton.js';
import "./_headroom.js";
// import './_mobile_menu_button.js';
// import './_random_color.js';
// import smoothscroll from 'smoothscroll-polyfill'

// import simpleParallax from 'simple-parallax-js';

// smoothscroll.polyfill()

// ///////////////////////// image Pralax ///////////////////////////////////////////////
// var image = document.getElementsByClassName('thumbnail');
// new simpleParallax(image);
// new simpleParallax(image, {
// 	scale: 1.5
// });

/////////////////////////card fading scroll ///////////////////////////////////////////////
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

/////////////////////////preloader images ///////////////////////////////////////////////
// menu (<nav> element)
// const menuEl = document.querySelector('.menu');
// const main_contentEl = document.querySelector("body");

// // preload the images set as data attrs in the menu items
// preloader("img").then(() => {
// 	// initialize the smooth scroll
// 	// const scroll = new LocomotiveScroll({el: menuEl, smooth: true});
// 	// initialize custom cursor
// 	// const cursor = new Cursor(document.querySelector('.cursor'));
// 	// initialize menu
// 	// new Menu(main_contentEl);
// });
