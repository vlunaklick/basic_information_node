let button = document.getElementById('btn-nav')
let navigation = document.getElementById('mobile-menu')

navigation.classList.add('hidden')

button.addEventListener('click', () => {
	if (navigation.classList.contains('hidden')) {
		navigation.classList.remove('hidden')
	} else {
		navigation.classList.add('hidden')
	}
})
