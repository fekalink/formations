function Product(id) {
    this.id = id;
    this.price = 0;
    this.name = "Product Name";
    this.text = "Product description";
}

Product.prototype = {

  id:0,
  price:0,
  name:"",
  image:"",
  text:"",

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
  getWeight: function() {
    return this.weight;
  },
  setImage: function() {
    this.image = image;
  },
  getImage: function() {
    return this.image;
  },
  setText: function(text) {
    this.text = text;
  },
  getText: function() {
    return this.text;
  }

}

/*
 * PURE JS 
document.getElementById('anchor').addEventListener('click', function() {
    console.log('anchor');
});
*/

$(document).ready(function(data, event) {
  //TODO dynamiser la liste produit
  var products = { "products" : MUSICBAND.session.get("products") };
  w3.displayObject("productlist", products);
  $('.addtocart').click(function() {

  });
});


