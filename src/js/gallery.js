const body = document.querySelector('body')
const burgerBtn = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.navbar__menu')
const mobileNavItems = document.querySelectorAll('.navbar__menu-item')
const spanYearFooter = document.querySelector('#custom-footer-year')
const spanYearFooterSecond = document.querySelector('#custom-footer-year-second')
const promotionBtn = document.querySelectorAll('.individual-promotion')
const promotionPopup = document.querySelector('.individual-promotion-popup')
const promotionShadow = document.querySelector('.individual-promotion-popup-shadow')
const promotionClose = document.querySelector('.individual-promotion-popup-close')

const handleNav = () => {
	if (burgerBtn.classList.contains('is-active')) {
		closeNav()
	} else {
		mobileNav.classList.add('show-mobile-nav')
		handleNavItemsAnimation()
		handleBurgerAnimation()
		handleScroll()
	}
}

const closeNav = () => {
	burgerBtn.classList.remove('is-active')
	mobileNav.classList.remove('show-mobile-nav')
	removeNavItemsAnimation()
	handleScroll()
}

const handleBurgerAnimation = () => {
	burgerBtn.classList.toggle('is-active')
}

const handleScroll = () => {
	if (burgerBtn.classList.contains('is-active')) {
		body.classList.add('block-scroll')
	} else {
		body.classList.remove('block-scroll')
	}
}

const handleNavItemsAnimation = () => {
	let delayTime = 0

	mobileNavItems.forEach(item => {
		item.classList.add('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const removeNavItemsAnimation = () => {
	mobileNavItems.forEach(item => {
		item.classList.remove('nav-items-animation')
	})
}

const handleFooterYear = () => {
	const year = new Date().getFullYear()
	spanYearFooterSecond.textContent = year
}

burgerBtn.addEventListener('click', handleNav)
mobileNavItems.forEach(item => {
	item.addEventListener('click', closeNav)
})

document.addEventListener('DOMContentLoaded', handleFooterYear)
