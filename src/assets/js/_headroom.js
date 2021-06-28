// if you're using a bundler, first import:
import Headroom from "headroom.js";
// grab an element
var elems = document.querySelectorAll('.header')
// var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
elems.forEach((elem) => {
    var headroom  = new Headroom(elem);
    // initialise
    headroom.init();
})


