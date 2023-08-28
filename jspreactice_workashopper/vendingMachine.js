
var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');
var balance = 0;
var products = [
  {
    name: 'Skittles',
    price: 85,
    id: 'A1'
  }
];

module.exports = {
  getProducts: function() {
    return products;
  },

  getProduct: function(productId) {
    var product = products.find(function(p) { return p.id === productId; });
    return product;
  },

};
