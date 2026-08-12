const cart = require('../data/cart');

function removeFromCart(productId) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === productId) {
      console.log("Removed " + cart[i].name + " from cart.");
      cart.splice(i, 1);
      return;
    }
  }
  console.log("Product with ID " + productId + " was not found in cart.");
}

module.exports = removeFromCart;