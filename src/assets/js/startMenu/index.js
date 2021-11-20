import Menu from "./menu";

const menu = document.querySelectorAll(".menu");
menu.forEach((menuEl) => {
	new Menu(menuEl);
	console.log("menuEl initilizrd");
});
