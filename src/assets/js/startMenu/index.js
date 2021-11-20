import Menu from "./menu";

const menuEl = document.querySelectorAll(".menu");
menuEl.forEach((menu) => {
	new Menu(menu);
	console.log("menu initilizrd");
});
