console.log("footer");

// canvasbg
const canvasbg = document.getElementsByClassName("footer_bubbles__canvasbg")[0];
const canvas = document.getElementsByClassName("footer_bubbles__canvas")[0];

if (canvasbg && canvas) {
	const ctxbg = canvasbg.getContext("2d");

	canvasbg.width = window.innerWidth;
	canvasbg.height = window.innerHeight;

	// canvas
	const ctx = canvas.getContext("2d");

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	let Bubbles = [];
	let bgBubbles = [];

	function addBubble() {
		Bubbles.push(new Bubble("rgb(13,12,13", 2.8));
	}

	function addbgBubble() {
		bgBubbles.push(new Bubble("rgb(236,223,228", 5.5));
	}

	function addBubbleDark() {
		Bubbles.push(new Bubble("rgb(236,223,228", 2.8));
	}

	function addbgBubbleDark() {
		bgBubbles.push(new Bubble("rgb(13,12,13", 5.5));
	}

	class Bubble {
		constructor(color, yspeed) {
			this.r = Math.random() * 150 + 30;
			this.x = Math.random() * canvas.width;
			this.y = Math.random() * 20 + canvas.height + this.r;
			this.life = true;
			this.vy = yspeed;
			this.vr = 0;
			this.vx = Math.random() * 4 - 2;
			this.color = color;
		}

		update() {
			this.vy += 0.00001;
			this.vr += 0.02;
			this.y -= this.vy;
			this.x += this.vx;
			if (this.r > 1) {
				this.r -= this.vr;
			}
			if (this.r <= 1) {
				this.life = false;
			}
		}

		draw() {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
			ctx.fillStyle = this.color;
			ctx.fill();
			ctx.closePath();
		}
	}

	// function handleBubbles
	function handleBubbles() {
		for (let i = Bubbles.length - 1; i >= 0; i--) {
			Bubbles[i].update();
			if (!Bubbles[i].life) {
				Bubbles.splice(i, 1);
			}
		}

		for (let i = bgBubbles.length - 1; i >= 0; i--) {
			bgBubbles[i].update();
			if (!bgBubbles[i].life) {
				bgBubbles.splice(i, 1);
			}
		}

		if (Bubbles.length < canvas.width / 4) {
			if (doc.getAttribute("color-scheme") === "dark") {
				addBubble();
			} else {
				addBubbleDark();
			}
		}

		if (bgBubbles.length < canvas.width / 12) {
			if (doc.getAttribute("color-scheme") === "dark") {
				addbgBubble();
			} else {
				addbgBubbleDark();
			}
		}
	}

	window = addEventListener("load", animate);

	window = addEventListener("resize", () => {
		canvasbg.width = window.innerWidth;
		canvasbg.height = window.innerHeight;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		let Bubbles = [];
		let bgBubbles = [];
	});

	function animate() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctxbg.clearRect(0, 0, canvas.width, canvas.height);

		handleBubbles();

		for (let i = bgBubbles.length - 1; i >= 0; i--) {
			bgBubbles[i].draw(ctxbg);
		}

		for (let i = Bubbles.length - 1; i >= 0; i--) {
			Bubbles[i].draw(ctx);
		}

		requestAnimationFrame(animate);
	}
}
