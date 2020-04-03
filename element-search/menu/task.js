const menuLink = Array.from(document.querySelectorAll('.menu__link'));

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = function () {
        const menuActive = document.querySelector('.menu_active');
        if (menuActive) {
            menuActive.classList.remove('menu_active');            
        }

        const parent = menuLink[i].closest('.menu__item'); 
        parentClassName = '.' + parent.className + '.this-menu';
        parent.classList.add('this-menu'); 

        const menuSub = document.querySelector(parentClassName + ' > .menu_sub');
        if (menuSub) {
            menuSub.classList.add('menu_active');
            return false;
        }

    }               
} 

