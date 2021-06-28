const elems = document.querySelectorAll('.to_top_button')

elems.forEach((elem) => {
	elem.onclick = function(e) {
		e.preventDefault()

		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}
})
const buttonElems = document.querySelectorAll('.button_test')

window.onscroll = (e) => {
	// console.log(window.pageYOffset)
	if (window.pageYOffset > "650") {
		// console.log('button scroll 650 plus')
		buttonElems.forEach((elem) => {
			// console.log("button", elem )
			elem.classList.remove("button_test--hide");
		})
	} else {
		console.log('button scroll 650 minus')
		buttonElems.forEach((elem) => {
			// console.log("button", elem )
			elem.classList.add("button_test--hide");
		})
	}
}