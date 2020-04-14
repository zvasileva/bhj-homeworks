const incButtons = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const decButtons = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const addButtons = Array.from(document.querySelectorAll('.product__add'));
const cntValues = Array.from(document.querySelectorAll('.product__quantity-value'));
const cart = document.querySelector('.cart__products');
const products = Array.from(document.querySelectorAll('.product'));

function findValue(num) {
    for (let j = 0; j < cntValues.length; j++) {
        if (j === num) {
            return cntValues[j];     
        }           
    }
}

function findProductData(num) {
    const cntValues = Array.from(document.querySelectorAll('.product__quantity-value'));
    for (let j = 0; j < products.length; j++) {
        if (j === num) {
            return products[j];     
        }           
    }
}

function findCartData(id) {
    const cartProducts = Array.from(document.querySelectorAll('.cart__product'));
    for (let j = 0; j < cartProducts.length; j++) {
        const cartId = cartProducts[j].getAttribute("data-id");
        if (cartId === id) {
            return cartProducts[j];     
        }           
    }
}

for (let i = 0; i < incButtons.length; i++) {
    incButtons[i].addEventListener('click', e => {
        e.preventDefault();
        const cntValue = findValue(i);
        cntValue.textContent = +(cntValue.textContent) + 1;
      }
    );  
}    

for (let i = 0; i < decButtons.length; i++) {
    decButtons[i].addEventListener('click', e => {
        e.preventDefault();
        const cntValue = findValue(i);
        const value = +(cntValue.textContent);
        if (value <= 1) {
            cntValue.textContent = 1;
        } else {
            cntValue.textContent = +(cntValue.textContent) - 1;
        }       
      }
    );  
}

function addProductToCart(num) {
    const product = findProductData(num);
    const productId = product.getAttribute("data-id");
    const img = product.querySelector('.product__image').getAttribute("src");
    const valueToAdd = findValue(num);
    const cntToAdd = +(valueToAdd.textContent);

    const cartData = findCartData(productId);
    if (cartData) {
        const cntCart = cartData.querySelector('.cart__product-count');
        cntCart.textContent = +(cntCart.textContent) + cntToAdd; 
    } else {
        cart.innerHTML += `
        <div class="cart__product" data-id="${productId}">
            <img class="cart__product-image" src="${img}">
            <div class="cart__product-count">${cntToAdd}</div>
        </div>`;         
    }  
}

for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener('click', e => {
        e.preventDefault();
        addProductToCart(i);     
      }
    );  
}