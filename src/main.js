let modalBtn = document.querySelector('.header-btn-menu');
let modalBtnClose = document.querySelector('.header-btn-esc');
let modal = document.querySelector('.header-menu');

modalBtn.addEventListener('click', function () {
  modalBtn.classList.toggle('active');
  modal.classList.toggle('active');
});
modalBtnClose.addEventListener('click', function () {
  modalBtnClose.classList.toggle('active');
  modal.classList.toggle('active');
});
