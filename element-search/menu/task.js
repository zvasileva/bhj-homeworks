const menuLink = Array.from(document.querySelectorAll('.menu__link'));

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = function () {

        const menuActive = document.querySelector('.menu_active' ); 
        if (menuActive) {
            const parentActive = menuActive.closest('.menu_active_parent' + i);
            if (!parentActive) {
                menuActive.classList.remove('menu_active');  
            }            
        }
                 

        for (let j = 0; j < menuLink.length; j++) {
            const menuActiveParent = document.querySelector('.menu_active_parent' + j);
            if (menuActiveParent) {
                if (j !== i) {
                    menuActiveParent.classList.remove('menu_active_parent' + j); 
                }
            }              
        }          
      

        const parent = menuLink[i].closest('.menu__item');
        parentClassName = '.menu__item.menu_active_parent' + i;
        if (!(parent.classList.contains('menu_active_parent' + i))) {
            parent.classList.add('menu_active_parent' + i); 
        }

        const menuSub = document.querySelector(parentClassName + ' > .menu_sub');
        if (menuSub) {
            if (menuSub.classList.contains('menu_active')) {
                menuSub.classList.remove('menu_active'); 
                parent.classList.remove('menu_active_parent' + i);
            } else {
                menuSub.classList.add('menu_active');
            }      
            return false;        
        } 
    }               
} 



