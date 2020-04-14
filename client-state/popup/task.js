const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)modal\s*\=\s*([^;]*).*$)|^.*$/, "$1");

if (!cookieValue) {
    const modalMain = document.getElementById('subscribe-modal');

    modalMain.classList.add('modal_active');
    
    const modalClose = Array.from(document.querySelectorAll('.modal__close'));
    
    for (let i = 0; i < modalClose.length; i++) {
        modalClose[i].onclick = function () {
            modalMain.classList.remove('modal_active');
            document.cookie='modal=yes';
        } 
    }
    
}



