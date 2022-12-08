const btnHamb = document.querySelector('.hamb');
const modalMobile = document.querySelector('.menumodal');
const btnClose = document.querySelector('.btnclose');

btnClose.addEventListener('click', () => {
  modalMobile.classList.toggle('active');
  btnHamb.classList.toggle('active');
});

btnHamb.addEventListener('click', () => {
  btnHamb.classList.toggle('active');
  modalMobile.classList.toggle('active');
});

modalMobile.addEventListener('click', (e) => {
  if (e.target == modalMobile) {
    modalMobile.classList.toggle('active');
    btnHamb.classList.toggle('active');
  }
});
