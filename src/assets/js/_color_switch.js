let colorswitch = document
	.querySelectorAll(".themeingbutton")
	.forEach((elem) => {
		elem.onclick = (e) => {
			var doc = document.firstElementChild;

			if (doc.getAttribute("color-scheme") === "dark") {
				doc.setAttribute("color-scheme", "lights2");
				localStorage.setItem("color-scheme", "lights2");
			} else if (doc.getAttribute("color-scheme") === "lights2") {
				doc.setAttribute("color-scheme", "dark");
				localStorage.setItem("color-scheme", "dark");
			} else if (doc.getAttribute("color-scheme") === "default") {
				doc.setAttribute("color-scheme", "lights2");
				localStorage.setItem("color-scheme", "lights2");
			} else {
				if (
					window.matchMedia &&
					window.matchMedia("(prefers-color-scheme: dark)").matches
				) {
					doc.setAttribute("color-scheme", "lights2");
					localStorage.setItem("color-scheme", "lights2");
				} else if (
					window.matchMedia &&
					window.matchMedia("(prefers-color-scheme: lights2)").matches
				) {
					doc.setAttribute("color-scheme", "dark");
					localStorage.setItem("color-scheme", "dark");
				}
			}
		};
	});
