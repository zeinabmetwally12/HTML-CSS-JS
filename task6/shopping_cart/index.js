const addToCart = require('./modules/addToCart');
const removeFromCart = require('./modules/removeFromCart');
const listCart = require('./modules/listCart');
const calculateTotal = require('./modules/calculateTotal');


addToCart(101, 1); 
addToCart(102, 2); 
addToCart(104, 3); 

listCart();
calculateTotal();

removeFromCart(102); 

listCart();
calculateTotal();