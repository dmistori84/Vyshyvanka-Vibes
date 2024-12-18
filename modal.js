const refs = {
  openModal: document.querySelector('.header-menu-btn'),
  closeModal: document.querySelector('.modal__close-btn'),
  modal: document.querySelector('.modal'),
}

console.log(refs.modal);
console.log(refs.openModal);



  refs.openModal.addEventListener('click', toggleModal);
  refs.closeModal.addEventListener('click', toggleModal);

  function toggleModal() {    
    refs.modal.classList.toggle('is-hidden');
  }



