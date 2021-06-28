let colorswitch = document.querySelectorAll('.themeingbutton').forEach((elem) => {
	elem.onclick = (e) => {
		let themeWrapper = document.querySelector('.theme-wrapper')
		if (themeWrapper.classList.contains('theme-dark')) {
			themeWrapper.classList.remove('theme-dark')
			themeWrapper.classList.add('theme-light')
		} else {
			themeWrapper.classList.remove('theme-light')
			themeWrapper.classList.add('theme-dark')
		} 
	}
  })