import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// function animateFrom(circle_red_one) {
//     console.log('hello trigger')
//     // direction = direction | 1;
  
//     var x = 0,
//         y = 0;

//     gsap.fromTo(circle_red_one, {x: x, y: y}, {
//         // duration: 1.25, 
//         x: 100,
//         y: 100, 
//         });
// }

// function animateTo(circle_red_one) {
//     console.log('hello trigger')
//     // direction = direction | 1;
  
//     var x = 100,
//         y = 100;

//     gsap.fromTo(circle_red_one, {x: x, y: y}, {
//         // duration: 1.25, 
//         x: 0,
//         y: 0, 
//         });
// }

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top", 
    pin: true, 
    pinSpacing: false ,
    rotation: 360,
  });
});


// gsap.utils.toArray(".circle_red_one").forEach((circle_red_one, i) => {
//     ScrollTrigger.create({
//       trigger: circle_red_one,
//       scrub: true,
//       onToggle: () => { animateFrom(circle_red_one) }, 
//     //   onEnterBack: () => { animateTo(circle_red_one) }, 
      
//     });
//   });

gsap.to(".circle_red_002", {
    scrollTrigger: {
      trigger: ".red",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      markers: {startColor: "green", endColor: "red", fontSize: "12px"}
    },
    x: 600,
    y: 200,
    transformOrigin: "left center", 
    ease: "none"
  });

gsap.to(".circle_red_003", {
    scrollTrigger: {
      trigger: ".red",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      markers: {startColor: "green", endColor: "red", fontSize: "12px"}
    },
    x: -600,
    y: 200,
    transformOrigin: "left center", 
    ease: "none"
  });
gsap.to(".circle_red_004", {
    scrollTrigger: {
      trigger: ".red",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      markers: {startColor: "green", endColor: "red", fontSize: "12px"}
    },
    x: 600,
    y: -200,
    transformOrigin: "left center", 
    ease: "none"
  });

gsap.to(".circle_red_005", {
    scrollTrigger: {
      trigger: ".red",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      markers: {startColor: "green", endColor: "red", fontSize: "12px"}
    },
    x: -600,
    y: -200,
    transformOrigin: "left center", 
    ease: "none"
  });

gsap.to(".circle_orange_006", {
    scrollTrigger: {
      trigger: ".orange",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      markers: {startColor: "green", endColor: "red", fontSize: "12px"}
    },
    // scaleX: 0.5,
    // scaleY: 0.5,
    x: -170,
    y: -200,
    transformOrigin: "left center", 
    ease: "none"
  });
gsap.to(".circle_orange_007", {
    scrollTrigger: {
      trigger: ".orange",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      markers: {startColor: "green", endColor: "red", fontSize: "12px"}
    },
    // scaleX: 0.5,
    // scaleY: 0.5,
    x: 170,
    y: -200,
    transformOrigin: "left center", 
    ease: "none"
  });
gsap.to(".circle_orange_008", {
    scrollTrigger: {
      trigger: ".orange",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      markers: {startColor: "green", endColor: "red", fontSize: "12px"}
    },
    // scaleX: 0.5,
    // scaleY: 0.5,
    x: 170,
    y: 200,
    transformOrigin: "left center", 
    ease: "none"
  });
gsap.to(".circle_orange_009", {
    scrollTrigger: {
      trigger: ".orange",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      markers: {startColor: "green", endColor: "red", fontSize: "12px"}
    },
    // scaleX: 0.5,
    // scaleY: 0.5,
    x: -170,
    y: 200,
    transformOrigin: "left center", 
    ease: "none"
  });
gsap.to(".circle_orange_102", {
    scrollTrigger: {
      trigger: ".orange",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      markers: {startColor: "green", endColor: "red", fontSize: "12px"}
    },
    // scaleX: 0.5,
    // scaleY: 0.5,
    x: -170,
    y: 200,
    transformOrigin: "left center", 
    ease: "none"
  });
gsap.to(".circle_orange_202", {
    scrollTrigger: {
      trigger: ".orange",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      markers: {startColor: "green", endColor: "red", fontSize: "12px"}
    },
    // scaleX: 0.5,
    // scaleY: 0.5,
    x: 170,
    y: 200,
    transformOrigin: "left center", 
    ease: "none"
  });
gsap.to(".circle_orange_302", {
    scrollTrigger: {
      trigger: ".orange",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      markers: {startColor: "green", endColor: "red", fontSize: "12px"}
    },
    // scaleX: 0.5,
    // scaleY: 0.5,
    x: -170,
    y: -200,
    transformOrigin: "left center", 
    ease: "none"
  });
gsap.to(".circle_orange_402", {
    scrollTrigger: {
      trigger: ".orange",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      markers: {startColor: "green", endColor: "red", fontSize: "12px"}
    },
    // scaleX: 0.5,
    // scaleY: 0.5,
    x: 170,
    y: -200,
    transformOrigin: "left center", 
    ease: "none"
  });

  

// --- RED PANEL ---
// gsap.fromTo(".circle_red_one", {
//     scrollTrigger: {
//       trigger: ".circle_red_one",
//       scrub: true,
//       onEnter: function() { animateFrom(trigger) }, 
      
//     }});
    

  
// ScrollTrigger.create({
//   snap: 1 / 4 // snap whole page to the closest section!
// });

