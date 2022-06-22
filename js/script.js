// scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
	smoothLink.addEventListener('click', function (e) {
		e.preventDefault();
		const id = smoothLink.getAttribute('href');

		document.querySelector(id).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
};

// button up
const btnUp = document.querySelector('.pageup');

function trackScroll() {
	const scrolled = window.pageYOffset;
	const coords = document.documentElement.clientHeight;

	if (scrolled > coords) {
	  btnUp.classList.add('pageup_show');
	}
	if (scrolled < coords) {
	  btnUp.classList.remove('pageup_show');
	}
}
function backToTop() {
	if (window.pageYOffset > 0) {
		window.scrollBy(0, -80);
		setTimeout(backToTop, 0);
	}
}
window.addEventListener ('scroll', trackScroll);
btnUp.addEventListener ('click', backToTop);

// галерея слайдер
new Swiper('.gallery__container', {
	navigation: {
		nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
	},
	mousewheel: {
		sensitivity: 1,
		eventsTarget: ".gallery__container"
	},
	slidesPerView: 4, //количество слайдов
	slidesPerGroup: 1, // количество перелистываемых слайдов
	speed: 800,
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 30,
		stretch: 50,
		slideShadows: false
	},
	breakpoints: {
		320: {
			slidesPerView: 1
		},
		576: {
			slidesPerView: 2
		},
		768: {
			slidesPerView: 3
		},
		1200: {
			slidesPerView: 4
		}
	},
	centeredSlides: true,
	initialSlide: 2,
	//spaceBetween: 30, // растояние между слайдами
	 
	loop: true, // бесконечная прокрутка, лучше отключить скролл снизу
	loopedSlides: 2 // для бесконечной прокрутки
	/* autoplay: {
		delay: 1000,
		disableOnInteraction: false, //отключить после ручного переключения
		stopOnLastSlide: true // закончить на последнем
	} */
	/* effect: 'flip',
	flipEffect: {
		slideShadows: true,
		limitRotation: true
	}, */
	
});

// modal
const orderBtn = document.querySelector('.btn_price');
const closeBtn = document.querySelector('.btn_close');
const modal = document.querySelector('.price__modal');
const showModal = () => {
    modal.classList.add('active');
};
orderBtn.addEventListener('click', showModal);

const closeModal = () => {
    modal.classList.remove('active');
};
closeBtn.addEventListener('click', closeModal);

// burger
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.promo__menu');
const span =  document.querySelectorAll('.hamburger span');

const showMenu = () => {
    menu.classList.toggle('active');
	span.forEach(item => {
		item.classList.toggle('active');
	});
};
hamburger.addEventListener('click', showMenu);
