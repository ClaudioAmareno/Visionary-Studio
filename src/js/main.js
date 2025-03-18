const footerYear = document.querySelector('.year')
const nav = document.querySelector('.nav')
const allSections = document.querySelectorAll('.section')



const handleCurrenYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrenYear()
// window.addEventListener('scroll', handleObserver)
