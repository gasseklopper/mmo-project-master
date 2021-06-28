const mobileMenuButton = document.querySelectorAll('.mobile_menu_button')
const mobileMenu = document.querySelectorAll('.mobile_menu')
var menuButton = document.getElementById('menuButton');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
        
        if (mobileMenuButton){  
            mobileMenuButton.forEach(elem => {
                if (window.getComputedStyle(elem, null).display == 'block') {             
                    setTimeout(() => { 
                        menuButton.click()
                    }, 1000);     
                } 
            })
        }
    });
});