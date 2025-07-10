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

var swiper = new Swiper(".newSwiper", {
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
	slidesPerView: 1,
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
    },
	breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
    },
});

var swiper = new Swiper(".images-swiper", {
	slidesPerView: 1,
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
    },
	breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
    },
});

