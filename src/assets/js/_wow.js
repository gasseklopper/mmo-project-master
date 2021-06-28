const WOW = require('wow.js');

const wow = new WOW(
	{
	  animateClass: 'animated',
	  offset:       100,
	  mobile:       true,
	  callback:     function(box) {
		console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
	  }
	}
  );
  wow.init();