(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-your-order-open]'),
    closeModalBtn: document.querySelector('[data-modal-your-order-close]'),
    modal: document.querySelector('[data-modal-your-order]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
