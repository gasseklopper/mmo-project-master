// import Flickity from 'flickity'
var Flickity = require('flickity-fullscreen');

const carousel = document.querySelectorAll('.carousel')

carousel.forEach((elem) => {

	var flkty = new Flickity( '.carousel', {
		fullscreen: true,
	});

})