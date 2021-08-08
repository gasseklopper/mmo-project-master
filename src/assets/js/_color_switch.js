let colorswitch = document
	.querySelectorAll(".themeingbutton")
	.forEach((elem) => {
		var doc = document.body;
		let onpageLoad = localStorage.getItem("color-scheme");

		if (onpageLoad === "dark") {
			doc.setAttribute("color-scheme", onpageLoad);
		}

		console.log("onpageLoad", onpageLoad);

		elem.onclick = (e) => {
			console.log("doc", doc);
			let onpageLoad = localStorage.getItem("theme") || "";
			localStorage.setItem("theme", "dark");

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
				doc.setAttribute("color-scheme", "dark");
				localStorage.setItem("color-scheme", "dark");
			}
		};
	});

// // On page load set the theme.
// (function() {
// 	let onpageLoad = localStorage.getItem("theme") || "";
// 	let element = document.body;
// 	element.classList.add(onpageLoad);
// 	document.getElementById("theme").textContent =
// 	  localStorage.getItem("theme") || "light";
//   })();

//   function themeToggle() {
// 	let element = document.body;
// 	element.classList.toggle("dark-mode");

// 	let theme = localStorage.getItem("theme");
// 	if (theme && theme === "dark-mode") {
// 	  localStorage.setItem("theme", "");
// 	} else {
// 	  localStorage.setItem("theme", "dark-mode");
// 	}

// 	document.getElementById("theme").textContent = localStorage.getItem("theme");
//   }
