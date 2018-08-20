'use strict mode'

/*
 * - ES6 JavaScript Shopping Cart (paypal)
 *
 * - Components:
 *   • DOM Caching
 *
 *
 *
*/

// @component DOM Caching
// @desc      Cache dom elements

const cartItems = [];
const cart = document.querySelector('.cart');
const cartBtns = document.querySelectorAll('[data-action="ADD_TO_CART"]');

// Loop throught cart buttons
cartBtns.forEach(cartBtn => {
  // Event listener - Click
  cartBtn.addEventListener('click', () => {
    // Get parent
    const itemDOM = cartBtn.parentNode;

    // Create item object
    const item = {
      image: itemDOM.querySelector('.product__image').getAttribute('src'),
      name: itemDOM.querySelector('.product__name').innerText,
      price: itemDOM.querySelector('.product__price').innerText
    };

    // Check if in cart
    const isInCart = (cartItems.filter(cartItem => (cartItem.name === item.name)).length > 0)

    if (!isInCart) {
      // Create new product markup
      let itemHTML = `
        <div class="cart__item">
          <img class="cart__item__image" src="${item.image}" alt="${item.name}"/>
          <h3 class="class__item__name">${item.name}</h3>
          <h3 class="class__item__price">${item.price}</h3>
        </div>
      `;

      // Update item status
      cartBtn.innerText = 'In Cart';

      // Insert HTML markup
      cart.insertAdjacentHTML('beforeend', itemHTML);

      // Push item to cart array
      cartItems.push(item);
    }
  });
});
