const modalCloseBtn = document.querySelector('[data-modal-close]');
const backdrop = document.querySelector('[data-modal]');
const filmsContainer = document.querySelector('[films-list]');

function toggleModal() {
  backdrop.classList.toggle('is-hidden');
}

function onFilmClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  } else {
    toggleModal();  
  }
}

modalCloseBtn.addEventListener('click', toggleModal);
filmsContainer.addEventListener('click', onFilmClick);
