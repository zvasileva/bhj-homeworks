const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');

function click_next () {
    const items = Array.from(document.querySelectorAll('.slider__item'));
    for (let i = 0; i < items.length; i++) {
        if (items[i].className.includes('slider__item_active'))  {
            items[i].classList.remove('slider__item_active');
            if (i === items.length - 1) {
                i = 0;
                items[i].classList.add('slider__item_active');
            } else {
                i++;
                items[i].classList.add('slider__item_active');
            }           
        }
    }
}

function click_prev () {
    const items = Array.from(document.querySelectorAll('.slider__item'));
    for (let i = items.length - 1; i >= 0; i--) {
        if (items[i].className.includes('slider__item_active'))  {
            items[i].classList.remove('slider__item_active');
            if (i === 0) {
                i = items.length - 1;
                items[i].classList.add('slider__item_active');
            } else {
                i--;
                items[i].classList.add('slider__item_active');
            }           
        }
    }
}

next.onclick = click_next;
prev.onclick = click_prev;



