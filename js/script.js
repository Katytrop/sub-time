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

// faq
const questions = document.querySelectorAll('.faq__question');

console.log(questions);
for(let i = 0; i < questions.length; i++ ) {
	questions[i].addEventListener('click', function() {
		let answer = this.nextElementSibling;
		let icon = this.previousElementSibling;
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.classList.toggle('active');
			icon.classList.toggle('active');
        }
	});
}

//feed
const prev = document.querySelector('.btn_prev');
const next = document.querySelector('.btn_next');
const slides = document.querySelectorAll('.feed__item');
let index = 0;

const activeSlide = n => {
	for(let slide of slides) {
		slide.classList.remove('active');
	}
	slides[n].classList.add('active');
};
const nextSlide = () => {
	if(index == slides.length -1) { // если слайд последний
		index = 0;
		activeSlide(index);
	} else {
		index++;
		activeSlide(index);
	}
};
next.addEventListener('click', nextSlide);

const prevSlide = () => {
	if(index == 0) { // если слайд первый
		index = slides.length -1;
		activeSlide(index);
	} else {
		index--;
		activeSlide(index);
	}
};
prev.addEventListener('click', prevSlide);

// mask
let inputTel = document.querySelector('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputTel);
// mask2
let inputTel2 = document.querySelector('.callback__input_tel');
let imask = new Inputmask('+7 (999) 999-99-99');
imask.mask(inputTel2);