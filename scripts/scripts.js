const link = document.querySelector('.hotel-button')
const closeBtn = document.querySelector('.modal-exit');
const modal =  document.querySelector('.modal-container')

link.addEventListener('click', (e) => {
	e.preventDefault()
	modal.classList.add('modal-container-open');
});

closeBtn.addEventListener('click', (e) => {
	e.preventDefault()
	modal.classList.remove('modal-container-open');
});