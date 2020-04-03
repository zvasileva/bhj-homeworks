const modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');
const modalSucces = document.getElementById('modal_success');

const modalClose = Array.from(document.querySelectorAll('.modal__close'));
const modalShowSuccess = document.querySelector('.show-success');

for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].onclick = function () {
        modalMain.classList.remove('modal_active');
        modalSucces.classList.remove('modal_active');
    } 
}

modalShowSuccess.onclick = function () {
     modalSucces.classList.add('modal_active');
}
