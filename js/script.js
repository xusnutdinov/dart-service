const servicesItems = document.querySelectorAll('.services__top');

servicesItems.forEach(function (item) {
	item.addEventListener('click', function (event) {
		let servicesBody = item.closest('.services__item').querySelector('.services__body');

		if (servicesBody.classList.contains('active')) {
			servicesBody.classList.remove('active');
		} else {
			document.querySelectorAll('.services__body').forEach(function (element) {
				element.classList.remove('active');
			});
			servicesBody.classList.add('active');
		}
	});
});


const testimonials = new Swiper('.testimonials-slider__container', {
	loop: true,
	slidesPerView: 2,
	direction: 'vertical',
	spaceBetween: 70,
	simulateTouch: false,
	autoplay: {
		delay: 3000,
		disableOnInteraction: true
	},
	navigation: {
		nextEl: '.testimonials-slider-next',
		prevEl: '.testimonials-slider-prev',
	},
});





const photoSlider = new Swiper('.photo-slider', {
	loop: true,
	slidesPerView: 3,
	centeredSlides: true,
	slideToClickedSlide: true,
	loopedSlides: 5,
	allowTouchMove: false,
	autoplay: {
		delay: 3000,
		disableOnInteraction: true
	},
});

const textSlider = new Swiper('.text-slider', {
	loop: true,
	slidesPerView: 1,
	centeredSlides: true,
	loopedSlides: 5,
	autoHeight: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: true
	},
	thumbs: {
		swiper: photoSlider,
		multipleActiveThumbs: true,
	},
});