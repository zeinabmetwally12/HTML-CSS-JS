const products = require('../data/products');
const cart = require('../data/cart');

function addToCart(productId, quantity) {
  let product = null;
  

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      product = products[i];
      break;
    }
  }

  if (product === null) {
    console.log("Product not found");
    return;
  }

 
  let foundInCart = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === productId) {
      cart[i].quantity += quantity;
      foundInCart = true;
      break;
    }
  }


  if (!foundInCart) {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity
    });
  }

  console.log("Added " + quantity + " x " + product.name + " to cart.");
}

module.exports = addToCart;