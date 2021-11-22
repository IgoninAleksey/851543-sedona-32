// const elem = document.querySelector('.navigation-link-favorites');

// elem.addEventListener('click', function (event) {
// 	event.preventDefault();
	
// });

// var elem = document.querySelector('#alert');

const link = document.querySelector('.hotel-button')
const closeBtn = document.querySelector('.modal-exit');
const modal =  document.querySelector('.modal-container')

link.addEventListener('click', (e) => {
	e.preventDefault()
	modal.classList.add('modal-container-open'); // добавляем класс для модалки
});

closeBtn.addEventListener('click', (e) => {
	e.preventDefault()
	modal.classList.remove('modal-container-open'); // убираем класс чтобы ее скрыть.
});