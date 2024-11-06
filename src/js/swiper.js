const partnersSwiper = new Swiper('.promotion-swiper', {
	slidesPerView: '2',
	loop: true,
	centeredSlides: true,
	speed: 8000,
	allowTouchMove: false,
	disableOnInteraction: false,
	autoplay: {
		delay: 0.5,
	},

	breakpoints: {
		767: {
			slidesPerView: 3,
		},

		992: {
			slidesPerView: 5,
		},
	},
})
