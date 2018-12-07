
function Cart() {

}

Cart.prototype = {
   
  products: [],
  totalPrice: 0,

  constructor: Cart,

  getTotalPrice: function() {
     var price = this.calculateTotal();
     this.totalPrice = price;
     return this.totalPrice;
  },
  
  calculateTotal: function() {
     var total = 0;
     for(var i=0;i<this.products.length;i++) {
         var product = this.products[i];
         total += product.price;
     }
     return total;
  },
  addProduct: function(product) {
    this.products[product.id] = product;
    console.log(" [INFO] Product " + product.id + "added to the cart" );
  },
  getProduct: function(productId) {
      return this.products[productId]
  }
  
};


