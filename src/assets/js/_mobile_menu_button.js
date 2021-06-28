const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

const mobileMenuButton = document.querySelectorAll('.mobile_menu_button')
const mobileMenu = document.querySelectorAll('.mobile_menu')
console.log('mobile_button', mobileMenuButton)

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

mobileMenuButton.forEach(elem => {
    
    elem.onclick = () => {
        mobileMenu.forEach(elem => {
            if (elem.style.top == '') {
                // disableBodyScroll(elem);
                elem.style.top = "0";
            } else if (elem.style.top == '0px') {
                // enableBodyScroll(elem);
                elem.style.top = "-140vh";
            } else {
                // disableBodyScroll(elem);
                elem.style.top = "0";
            }

        })
        console.log('mobile_button', elem)
    }
});

var menuButton = document.getElementById('menuButton');
if (menuButton) {
    menuButton.addEventListener('click',  (e) => {
        menuButton.classList.toggle('is-active');
        e.preventDefault();
    });
}