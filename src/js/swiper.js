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
		768: {
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

const swiper = new Swiper('.main-swiper', {
	slidesPerView: 1,
	loop: true,
	autoplay: {
		delay: 10,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	},
	speed: 4000,
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
	},
})

const testimonialsSwiper = new Swiper(".testimonials-swiper", {
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
  });
