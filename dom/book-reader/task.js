const book = document.querySelector('.book');
const bookControl = document.querySelector('.book__control');
const fonts = bookControl.children;

function isActive(font, index, array) {
    if (!font.classList.contains('font-size_active')) {
        return;
    }            
    return font;
}

let fontActive = Array.from(fonts).find(isActive);

let fontSizeActive = fontActive.getAttribute("data-size");

function setActiveFont(font) {
    if (fontActive) {
        fontActive.classList.remove('font-size_active');
    }
    
    fontActive = font;
    fontActive.classList.add('font-size_active');

    fontSizeActive = fontActive.getAttribute("data-size");

    book.classList.remove('book_fs-big');
    book.classList.remove('book_fs-small');

    if (fontSizeActive === 'big') {
        book.classList.add('book_fs-big');
    } else if (fontSizeActive === 'small') {
        book.classList.add('book_fs-small');
    }
}


bookControl.addEventListener("click", (e) => {
    e.preventDefault();

    let target = e.target;

    if (!target.classList.contains('font-size')) {
        return;
    }

    setActiveFont(target);
    
   });   