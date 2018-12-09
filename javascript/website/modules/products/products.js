function Product(id) {
    this.id = id;
    this.price = 0;
    this.name = "";
}

Product.prototype = {

  id:0,
  price:0,
  name:"",

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

//populate products
var product1 = new Product(2333);
var product2 = new Product(13444);
var product3 = new Product(23232);

product1.setPrice(23);
product2.setPrice(12);
product3.setPrice(11);

product1.setWeight(230);
product2.setWeight(120);
product3.setWeight(1100);




