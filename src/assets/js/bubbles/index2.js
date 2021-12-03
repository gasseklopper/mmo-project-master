console.log("index2.js");
var morleyDotsmorleyDotsCanvas = document.getElementById("morleyDotsCanvas");

if (morleyDotsCanvas) {
	// get the context
	var c = morleyDotsCanvas.getContext("2d");

	morleyDotsCanvas.width = window.innerWidth;
	morleyDotsCanvas.height = window.innerHeight + 500;

	//morleyDotsCanvas wight and height
	var w = morleyDotsCanvas.width;
	var h = morleyDotsCanvas.height;

	// create var initBubbles with 50 as value
	var initBubbles = 100;

	//create var minBubbles with value of 10
	var minBubbles = 55;

	//array for all Bubbles
	var bubbles = [];

	// create a button for screenshots on teh canvas
	// create a button for screenshots on teh canvas
	var button = document.createElement("button");
	button.style.top = "110px";
	button.style.position = "fixed";
	button.style.left = "110px";
	button.style.zIndex = "100";
	button.style.width = "150px";
	button.style.height = "150px";
	button.style.borderRadius = "50%";
	button.style.backgroundColor = "transparent";
	button.style.border = "5px solid #fff";
	button.style.cursor = "pointer";
	button.style.color = "white";
	button.style.fontSize = "30px";
	button.style.fontFamily = "Arial";
	button.style.fontWeight = "bold";
	button.innerText = "download";
	button.onclick = function () {
		var data = morleyDotsCanvas.toDataURL();
		var link = document.createElement("a");
		link.download = "morleyDots.png";
		link.href = data;
		link.click();
	};
	morleyDotsCanvas.parentElement.appendChild(button);

	// create event listener with init
	window.addEventListener("load", init);
}

// create function init
function init() {
	// fill the bubble array with createBubble function
	while (bubbles.length < initBubbles) {
		bubbles.push(createBubbles());
	}
	// call the animation loop
	draw();
}

//function to create bubbles
function Bubble(x, y, r, vx, vy) {
	this.x = x;
	this.y = y;
	this.r = r;
	this.vx = vx;
	this.vy = vy;
	this.color = randomColor();
	this.colorHighLight = randomColor();
	this.draw = function () {
		//draw bubble
		c.beginPath();
		c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
		c.fillStyle = this.color;
		c.fill();
		c.closePath();
		// draw shine dot 1 3rd of bubble
		c.beginPath();
		c.arc(
			this.x - r / 3,
			this.y - r / 3,
			this.r / 3,
			0,
			Math.PI * 2,
			false
		);
		c.fillStyle = this.colorHighLight;
		c.fill();
		c.closePath();
	};
}

// function to create bubbles
function createBubbles() {
	var x = Math.random() * w;
	var y = Math.random() * h;
	var r = Math.random() * 33 + 5;
	// velocity variables
	var vx = Math.random() * 2 - 1;
	var vy = Math.random() * 2 - 1;
	// retutn Bubble
	return new Bubble(x, y, r, vx, vy);
}
// create function randomColor with return hex color string
function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + (r + 20) + ", " + (g + 10) + ", " + (b + 10) + ")";
}

// function to draw bubbles
function draw() {
	// paint background with randomColor()
	c.fillStyle = randomColor();
	// clear the canvas
	// c.clearRect(0, 0, w, h);

	// draw all bubbles
	for (var i = 0; i < bubbles.length; i++) {
		var currentBubble = bubbles[i];

		// updtaing the size of the bubbles
		currentBubble.r = currentBubble.r + (0.06 % currentBubble.r);

		// updtaing the position of the bubbles
		currentBubble.x += currentBubble.vx;
		currentBubble.y += currentBubble.vy;
		// draw
		currentBubble.draw();

		// check if bubble is out of bounds
		if (
			currentBubble.x + currentBubble.r > w ||
			currentBubble.x - currentBubble.r < 0 ||
			currentBubble.y - currentBubble.r < 10 ||
			currentBubble.r > 180
		) {
			bubbles.splice(i, 1);
			if (bubbles.length < minBubbles) {
				bubbles.splice(i, 0, createBubbles());
			}
		}
	}
	// call the requestAnimationFrame with draw
	requestAnimationFrame(draw);
}
