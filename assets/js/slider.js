var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	speed: 2000,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
});

var swiper = new Swiper(".spotlights-swiper", {
	slidesPerView: 3,
    spaceBetween: 15,
	speed: 2000,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
});