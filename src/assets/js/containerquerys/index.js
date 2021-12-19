const setSizes = () => {
	const cards = document.querySelectorAll(".cardWidth");
	cards.forEach((card) => {
		const cardWidth = card.clientWidth;
		card.setAttribute("data-size", `${cardWidth} px`);
	});
};

setSizes();
window.onresize = setSizes;
