const cart = require('../data/cart');

function calculateTotal() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = total + (cart[i].price * cart[i].quantity);
  }
  console.log("Total Price: $" + total);
  return total;
}

module.exports = calculateTotal;