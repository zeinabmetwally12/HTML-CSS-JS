const cart = require('../data/cart');

function listCart() {
  console.log("\nCart Items:");
  if (cart.length === 0) {
    console.log("Your cart is empty.");
  } else {
    for (let i = 0; i < cart.length; i++) {
      console.log("ID: " + cart[i].id + " | " + cart[i].name + " | Price: $" + cart[i].price + " | Qty: " + cart[i].quantity);
    }
  }
}

module.exports = listCart;