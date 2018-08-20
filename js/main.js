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

const cartBtns = document.querySelectorAll('[data-action="ADD_TO_CART"]');

// Loop throught cart buttons
cartBtns.forEach(cartBtn => {
  // Event listener - Click
  cartBtn.addEventListener('click', () => {
    // Get parent
    const productDOM = cartBtn.parentNode;
    // Create product object
    const product = {
      image: productDOM.querySelector('.product__image').getAttribute('src'),
      name: productDOM.querySelector('.product__name').innerText,
      price: productDOM.querySelector('.product__price').innerText
    };
    console.table(product);
  });
});
