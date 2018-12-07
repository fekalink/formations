
function Product(id) {
    this.id = id;
    this.price = 0;
}

Product.prototype = {

  id:0,
  price:0,

  constructor: Product,

  setPrice : function(price) {
    this.price = price;
  },
  getPrice : function() {
    return this.price;
  },  

  setWeight: function(weight) {
    this.weight = weight;
  },

}


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

var product1 = new Product(2333);
var product2 = new Product(13444);
var product3 = new Product(23232);

product1.setPrice(23);
product2.setPrice(12);
product3.setPrice(11);

product1.setWeight(230);
product2.setWeight(120);
product3.setWeight(1100);

var cart = new Cart();

cart.addProduct(product1)
cart.addProduct(product2)
cart.addProduct(product3)

cart.getTotalPrice();

localStorage.setItem("cart", cart);


