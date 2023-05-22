(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-your-oder-open]'),
    closeModalBtn: document.querySelector('[data-modal-your-oder-close]'),
    modal: document.querySelector('[your-oder-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
