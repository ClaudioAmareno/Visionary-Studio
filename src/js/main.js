import mediumZoom from 'medium-zoom'

const footerYear = document.querySelector('.year')

const nav = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav-link')
const allSections = document.querySelectorAll('.section')
const allDesktopLinks = document.querySelectorAll('.desktop-link')
const burgerBtn = document.querySelector('.burger')
const burgerFirst = document.querySelector('.first')
const burgerSecond = document.querySelector('.second')
const burgerThird = document.querySelector('.third')
const navScreen = document.querySelector('.nav-screen')

const body = document.querySelector('body')

const toggleButtons = document.querySelectorAll('.toggleBtn')

const newsletter = document.querySelector('.newsletter-input')
const newsletterBtn = document.querySelector('.newsletter-button')
const newsletterError = document.querySelector('.newsletter-error')
const newsletterThankYouNote = document.querySelector('.newsletter-accuracy')

const mailInput = document.querySelector('.mail-input')
const mailError = document.querySelector('.mail-error')
const nameInput = document.querySelector('.name-input')
const nameError = document.querySelector('.name-error')
const questionInput = document.querySelector('.question-input')
const questionError = document.querySelector('.question-error')
const formBtn = document.querySelector('.form-button')
const popup = document.querySelector('.popup')
const popupBtn = document.querySelector('.popup-btn')

// Function section
// Change color of links in the navigation function

const handleObserver = () => {
	let top = window.scrollY

	allDesktopLinks.forEach(link => {
		link.classList.add('after:scale-x-0', 'after:scale-y-0')
	})

	for (let sec of allSections) {
		let offset = sec.offsetTop - 250
		let height = sec.offsetHeight
		let id = sec.getAttribute('id')

		if (top >= offset && top < offset + height) {
			let activeLink = document.querySelector(`.desktop-link[href*="${id}"]`)
			if (activeLink) {
				activeLink.classList.remove('after:scale-x-0', 'after:scale-y-0')
			}
			return
		}
	}
}

// Change color of navigation function
const changeNavColor = () => {
	let navHeight = nav.offsetHeight
	let shouldChangeColor = false

	allSections.forEach(section => {
		const rect = section.getBoundingClientRect()

		if (rect.top <= navHeight && rect.bottom >= 0 && section.classList.contains('bg-gray')) {
			shouldChangeColor = true
		}
	})

	nav.style.backgroundColor = shouldChangeColor ? 'hsl(0, 0%, 18%)' : 'hsl(0, 0%, 27%)'
}

window.addEventListener('scroll', changeNavColor)

// ScrollSpy function

const moveNavScreen = () => {
	navScreen.classList.toggle('custom-active')
	body.classList.toggle('stop-scrolling')
	burgerFirst.classList.toggle('rotate-bar-first')
	burgerSecond.classList.toggle('rotate-bar-second')
	burgerThird.classList.toggle('rotate-bar-third')
}

// Current year in footer function

const handleCurrenYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

// Show more images on mobile devices function

const showImages = section => {
	const images = document.querySelectorAll(`.${section}Images img.hidden`)
	const button = document.querySelector(`.toggleBtn[data-section="${section}"]`)

	const iconArrow = button.querySelector('.ti-arrow-down')
	const textBtn = button.querySelector('.text-btn')

	images.forEach(image => {
		image.classList.toggle('show')
	})

	iconArrow.classList.toggle('rotate-180')
	textBtn.textContent = textBtn.textContent === 'Zobacz więcej' ? 'Zobacz mniej' : 'Zobacz więcej'
}

// Valid forms function

const checkNewsletter = () => {
	if (
		!newsletter.value.match(
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
		)
	) {
		if (newsletter.value == '') {
			newsletterError.classList.add('show')
			newsletterThankYouNote.classList.remove('show')
			newsletterThankYouNote.textContent = ''
			newsletterError.textContent = 'Musisz podać swój adres email!'
		} else {
			newsletterError.classList.add('show')
			newsletterThankYouNote.classList.remove('show')
			newsletterThankYouNote.textContent = ''
			newsletterError.textContent = 'Wpisz poprawny adres email!'
		}
	} else {
		newsletterError.textContent = ''
		newsletterThankYouNote.classList.add('show')
		newsletterError.classList.remove('show')
		newsletterThankYouNote.textContent = 'Dziękujemy za zapis do naszego newslettera!'
	}
}

const checkFormMail = () => {
	if (
		!mailInput.value.match(
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
		)
	) {
		if (mailInput.value == '') {
			mailError.textContent = '*Musisz podać swój adres email!'
		} else {
			mailError.textContent = '*Wpisz poprawny adres email!'
		}
	} else {
		mailError.textContent = ''
	}
}

const checkFormName = () => {
	if (nameInput.value == 0) {
		nameError.textContent = '*Podaj swoje imię i nazwisko'
	} else {
		nameError.textContent = ''
	}
}

const checkFormQuestion = () => {
	if (questionInput.value == 0) {
		questionError.textContent = '*Najpierw musisz zdać pytanie, aby otrzymać odpowiedź :)'
	} else {
		questionError.textContent = ''
	}
}

const showPopup = () => {
	if (
		questionInput.value !== '' &&
		nameInput.value !== '' &&
		mailInput.value.match(
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
		)
	) {
		popup.classList.add('show-popup')
		body.classList.add('stop-scrolling')
	}
}

const closePopup = () => {
	popup.classList.remove('show-popup')
	body.classList.remove('stop-scrolling')
	questionInput.value = ''
	nameInput.value = ''
	mailInput.value = ''
}

// Photo-zoom

mediumZoom('.zoom', {
	margin: 50,
})

// Listeners section

toggleButtons.forEach(button => {
	button.addEventListener('click', () => {
		const section = button.getAttribute('data-section')
		showImages(section)
	})
})

handleCurrenYear()

window.addEventListener('scroll', handleObserver)

burgerBtn.addEventListener('click', moveNavScreen)

nav.addEventListener('click', e => {
	if (e.target.classList.contains('nav-link')) {
		moveNavScreen()
	}
})

newsletterBtn.addEventListener('click', checkNewsletter)

formBtn.addEventListener('click', () => {
	checkFormMail()
	checkFormName()
	checkFormQuestion()
	showPopup()
})

popupBtn.addEventListener('click', closePopup)
