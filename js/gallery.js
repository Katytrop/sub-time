// burger
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.header__menu');
const span =  document.querySelectorAll('.hamburger span');

const showMenu = () => {
    menu.classList.toggle('active');
	span.forEach(item => {
		item.classList.toggle('active');
	});
};
hamburger.addEventListener('click', showMenu);
