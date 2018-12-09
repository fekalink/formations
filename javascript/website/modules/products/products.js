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

/*
 * PURE JS 
document.getElementById('anchor').addEventListener('click', function() {
    console.log('anchor');
});
*/

$('addtocart').click(function() {
  //TODO dynamiser la liste produit
  MUSICBAND.log("Product click !");
});

