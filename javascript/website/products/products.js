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


