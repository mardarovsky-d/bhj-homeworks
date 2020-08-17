const cardProducts = document.querySelector('.cart__products');
    products = document.querySelectorAll('.product');

    products.forEach((product) => {
        let isInBasket = false;
        
        const productIncr = product.querySelector('.product__quantity-control_inc'),
            productDecr = product.querySelector('.product__quantity-control_dec');
        
        let productQuantity = product.querySelector('.product__quantity-value');

        productIncr.addEventListener('click', () => {
            productQuantity.textContent++;
        });

        productDecr.addEventListener('click', () => {
            if (productQuantity.textContent > 1) {
                productQuantity.textContent--;
            }
        });

        const productImage = product.querySelector('.product__image');
        productImage.classList.add('cart__product-image');
        
        const addToBasket = product.querySelector('.product__add');
        
        addToBasket.addEventListener('click', () => {
            if (isInBasket === false) {
                cardProducts.insertAdjacentHTML('afterBegin',
                `<div class="cart__product" data-id="${product.dataset.id}">
                    ${productImage.outerHTML}
                    <div class="cart__product-count">${productQuantity.textContent}</div>
                </div>`
                );
                isInBasket = true;
                
            } else {
                const cartProduct = document.querySelectorAll('.cart__product');
                cartProduct.forEach((cartItem) => {
                    if (cartItem.dataset.id === product.dataset.id) {
                        let cartProductQuantity = cartItem.querySelector('.cart__product-count');
                        cartProductQuantity.textContent = Number(cartProductQuantity.textContent) + Number(productQuantity.textContent);
                    }
                })
            }
        });

    });