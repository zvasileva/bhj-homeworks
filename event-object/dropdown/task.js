const menuValue = Array.from(document.querySelectorAll('.dropdown__value'));
let menuItem;

for (let i = 0; i < menuValue.length; i++) {
    const parentClassName = '.dropdown.dropdown__parent' + i; 
    function menuValueOpen() {
        const parent = menuValue[i].closest('.dropdown');
        if (parent) {
            if (!(parent.classList.contains('dropdown__parent' + i))) {
                parent.classList.add('dropdown__parent' + i);
            }
        }
        const menuList = document.querySelector(parentClassName + ' > .dropdown__list');
        if (menuList) {
            if (menuList.classList.contains('dropdown__list_active')) {
                menuList.classList.remove('dropdown__list_active'); 
                parent.classList.remove('dropdown__parent' + i);
            } else {
                menuList.classList.add('dropdown__list_active');
                menuItem = Array.from(document.querySelectorAll(parentClassName + ' > .dropdown__list_active > .dropdown__item > .dropdown__link')); 
                if (menuItem) {
                    console.log(menuItem);
                    for (let j = 0; j < menuItem.length; j++) {
                        function menuItemClick (e) {
                            e.preventDefault();
                            menuValue[i].textContent = menuItem[j].textContent;
                            menuList.classList.remove('dropdown__list_active'); 
                            parent.classList.remove('dropdown__parent' + i);
                        }
                        menuItem[j].addEventListener("click", menuItemClick);
            
                    }
                }                  
            }        
        }         
    }

    menuValue[i].addEventListener("click", menuValueOpen);


}



