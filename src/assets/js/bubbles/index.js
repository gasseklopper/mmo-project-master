console.log("canvas");

//canvas variables
var canvas = document.getElementById("canvas");

var c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight + 500;

//canvas wight and height
var w = canvas.width;
var h = canvas.height;

// create var initBubbles with 50 as value
var initBubbles = 100;

//create var minBubbles with value of 10
var minBubbles = 55;

//array for all Bubbles
var bubbles = [];

// create event listener with init
window.addEventListener("load", init);

// create function init
function init() {
	// fill the bubble array with createBubble function
	while (bubbles.length < initBubbles) {
		bubbles.push(createBubbles());
	}
	// call the animation loop
	draw();
	console.log(bubbles);
	// animationLoop();
}

//test the bubble function
// let b = new Bubble(100, 100, 20, 0, -2);
// b.draw();

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
	var r = Math.random() * 10 + 5;
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
	return "rgb(" + (r + 20) + ", " + (r + 10) + ", " + (r + 10) + ")";
}

// function to draw bubbles
function draw() {
	// paint background with black
	c.fillStyle = randomColor();
	// clear the canvas
	// c.clearRect(0, 0, w, h);

	// draw all bubbles
	for (var i = 0; i < bubbles.length; i++) {
		var currentBubble = bubbles[i];

		// updtaing the position of the bubbles
		currentBubble.x += currentBubble.vx;
		currentBubble.y += currentBubble.vy;
		// draw
		currentBubble.draw();

		// check if bubble is out of bounds
		// check if bubble is out of bounds
		if (
			currentBubble.x + currentBubble.r > w ||
			currentBubble.x - currentBubble.r < 0 ||
			currentBubble.y - currentBubble.r < 10
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
