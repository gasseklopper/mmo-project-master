console.log("circularMotion");
import { randomColor, randomIntFromRange } from "./utils/canvas_utils.js";
const canvasBoilerplate = document.querySelector(".canvasBoilerplate");

if (canvasBoilerplate) {
	const canvas = canvasBoilerplate;
	const c = canvas.getContext("2d");

	canvas.width = innerWidth;
	canvas.height = innerHeight;

	const mouse = {
		x: innerWidth / 2,
		y: innerHeight / 2,
	};

	const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

	// Event Listeners
	addEventListener("mousemove", (event) => {
		mouse.x = event.clientX;
		mouse.y = event.clientY;
	});

	addEventListener("resize", () => {
		canvas.width = innerWidth;
		canvas.height = innerHeight;

		init();
	});

	// Objects
	class Object {
		constructor(x, y, radius, color) {
			this.x = x;
			this.y = y;
			this.radius = radius;
			this.color = color;
		}

		draw() {
			c.beginPath();
			c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
			c.fillStyle = this.color;
			c.fill();
			c.closePath();
		}

		update() {
			this.draw();
		}
	}

	// Particle Objects
	class Particle {
		constructor(x, y, radius, color) {
			this.x = x;
			this.y = y;
			this.radius = radius;
			this.color = color;
			this.radians = Math.random() * Math.PI * 2;
			this.velocity = 0.05;
			this.distanceFromCenter = randomIntFromRange(50, 120);
			this.lastMouse = {
				x: mouse.x,
				y: mouse.y,
			};
		}

		draw(lastPoint) {
			c.beginPath();
			c.strokeStyle = this.color;
			c.lineWidth = this.radius;
			c.moveTo(lastPoint.x, lastPoint.y);
			c.lineTo(this.x, this.y);
			c.stroke();
			c.closePath();
		}

		update() {
			const lastPoint = {
				x: this.x,
				y: this.y,
			};

			// move radians over time
			this.radians += this.velocity;

			// Drag effect
			this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05;
			this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05;

			this.x =
				this.lastMouse.x +
				Math.cos(this.radians) * this.distanceFromCenter;
			this.y =
				this.lastMouse.y +
				Math.sin(this.radians) * this.distanceFromCenter;
			this.draw(lastPoint);
		}
	}

	// Implementation
	let particles;
	function init() {
		particles = [];

		for (let i = 0; i < 50; i++) {
			const radius = Math.random() * 2 + 1;
			particles.push(
				new Particle(
					canvas.width / 2,
					canvas.height / 2,
					radius,
					randomColor(colors)
				)
			);
		}
		console.log(particles);
	}

	// Animation Loop
	function animate() {
		requestAnimationFrame(animate);
		// c.clearRect(0, 0, canvas.width, canvas.height);
		c.fillStyle = "rgba(255, 255, 255, 0.05)";
		c.fillRect(0, 0, canvas.width, canvas.height);

		c.fillText("HTML CANVAS BOILERPLATE", mouse.x, mouse.y);
		particles.forEach((particle) => {
			particle.update();
		});
	}

	init();
	animate();
}
