let colorswitch = document
	.querySelectorAll(".themeingbutton")
	.forEach((elem) => {
		elem.onclick = (e) => {
			var doc = document.firstElementChild;
			
			if (doc.getAttribute("color-scheme") == "dark") {
				doc.setAttribute("color-scheme", "light");
				localStorage.setItem("color-scheme", "light");
			} else if (doc.getAttribute("color-scheme") == "light") {
				doc.setAttribute("color-scheme", "dark");
				localStorage.setItem("color-scheme", "dark");
			} else if (doc.getAttribute("color-scheme") == "default") {
				doc.setAttribute("color-scheme", "light");
				localStorage.setItem("color-scheme", "light");
			} else {
				if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
					doc.setAttribute("color-scheme", "light");
					localStorage.setItem("color-scheme", "light");
				} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
					doc.setAttribute("color-scheme", "dark");
					localStorage.setItem("color-scheme", "dark");
				}
				
			}
		};
	});
