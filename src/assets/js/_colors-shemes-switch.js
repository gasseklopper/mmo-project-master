const switcher = document.querySelectorAll('#theme-switcher').forEach(el => {

	const doc = document.firstElementChild

	el.addEventListener('input', e =>
		setTheme(e.target.value))

	const setTheme = theme =>
		doc.setAttribute('color-scheme', theme)
	// doc.classList.add('color-scheme');
});
