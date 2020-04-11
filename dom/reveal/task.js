const isInViewport = function(element) {
    const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    return (elementTop < viewportHeight && elementTop > 0)||(elementBottom < viewportHeight && elementBottom > 0) ? true : false;
};

let activeReveal;
const reveals = document.querySelectorAll('.reveal');

function setActiveReveal(reveal) {
    activeReveal = reveal;
    activeReveal.classList.add('reveal_active');
}

function delActiveReveal(reveal) {
    reveal.classList.remove('reveal_active');
}

document.addEventListener("scroll", () => {
    for (reveal of reveals) {
        if (isInViewport(reveal)) {
            setActiveReveal(reveal);
        } else {
            delActiveReveal(reveal);
        }
    }
    
});

