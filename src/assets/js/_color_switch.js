let colorswitch = document
	.querySelectorAll(".themeingbutton")
	.forEach((elem) => {
		elem.onclick = (e) => {
			console.log("click switch");
			const doc = document.firstElementChild;
			let themeWrapper = document.querySelector(".theme-wrapper");
			if (themeWrapper.classList.contains("theme-dark")) {
				themeWrapper.classList.remove("theme-dark");
				themeWrapper.classList.add("theme-light");
				console.log("click switch light");
				doc.setAttribute("color-scheme", "light");
			} else {
				themeWrapper.classList.remove("theme-light");
				themeWrapper.classList.add("theme-dark");
				console.log("click switch dark");
				doc.setAttribute("color-scheme", "dark");
			}
		};
	});
