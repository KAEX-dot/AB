const scrollOffset = 10

const scrollElement1 = document.querySelector('.bottominf')
const scrollElement2 = document.querySelectorAll('.el')
const nav = document.querySelector('nav')
const button = document.querySelector('.button')
const navLink = document.querySelector('.navLink ')
const body = document.querySelector('body')
const container = document.querySelector('.container')
const pics = document.querySelectorAll('.pic')
// const trwrap = document.querySelector('.trwrap')
// const trelwrap = document.querySelectorAll('.trelwrap')
const elementInView = (el, offset = 0) => {
	const elementTop = el.getBoundingClientRect().top

	return (
		elementTop <=
		(window.innerHeight || document.documentElement.clientHeight) - offset
	)
}

const displayScrollElement = el => {
	el.classList.add('scrolled')
}

// const hideScrollElement = el => {
// 	el.classList.remove('scrolled')
// }

const handleScrollAnimation = el => {
	if (elementInView(el, scrollOffset)) {
		displayScrollElement(el)
	} // else {
	// 	hideScrollElement(el)
	// }
}

window.addEventListener('scroll', () => {
	handleScrollAnimation(scrollElement1)
	scrollElement2.forEach(e => handleScrollAnimation(e))
})
// ------------------------------------------------------------------------------------------------------------------------------------------
console.log(window.screen.availHeight, window.screen.availWidth)
if (window.screen.availHeight > window.screen.availWidth) {
	nav.classList.remove('compNav')
	nav.classList.add('phoneNav')
	button.classList.add('active')
} else {
	nav.classList.add('compNav')
	nav.classList.remove('phoneNav')
	button.classList.remove('active')
}
// ------------------------------------------------------------------------------------------------------------------------------------------
button.addEventListener('click', function () {
	if (nav.classList.contains('active')) {
		nav.classList.remove('active')
		body.style.overflow = ''
	} else {
		nav.classList.add('active')
		body.style.overflow = 'hidden'
		console.log('bgdf')
	}
})
// ------------------------------------------------------------------------------------------------------------------------------------------
pics.forEach(pic =>
	pic.addEventListener('click', () => {
		const newPic = document.createElement('div')
		body.style.overflow = 'hidden'
		newPic.style.width = '75%'
		newPic.style.aspectRatio = '16 / 10'
		newPic.style.backgroundImage = `url('${pic.src}')`
		newPic.style.zIndex = '13'
		newPic.style.backgroundRepeat = 'no-repeat'
		newPic.style.backgroundPosition = 'center'
		newPic.style.position = 'fixed'
		newPic.style.top = '50%'
		newPic.style.left = '50%'
		newPic.style.backgroundSize = 'cover'
		newPic.style.transform = 'translate(-50%,-50%)'
		newPic.classList.add('newPic')
		// ---
		const backPic = document.createElement('div')
		backPic.style.backgroundColor = 'black'
		backPic.style.position = 'fixed'
		backPic.style.opacity = '0.7'
		backPic.style.top = '0'
		backPic.style.left = '0'
		backPic.style.bottom = '0'
		backPic.style.right = '0'
		backPic.style.zIndex = '12'

		// ---
		body.appendChild(newPic)
		body.appendChild(backPic)
		console.log(newPic)
		newPic.addEventListener('click', () => {
			newPic.remove()
			backPic.remove()
			body.style.overflowY = ''
		})
	})
)
