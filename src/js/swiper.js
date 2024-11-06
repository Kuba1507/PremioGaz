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
		410: {
			slidesPerView: 3,
		},
		767: {
			slidesPerView: 4,
		},

		992: {
			slidesPerView: 4,
		},

		1200: {
			slidesPerView: 5,
		},
	},
})
