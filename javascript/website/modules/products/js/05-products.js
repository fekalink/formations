

class Product {

  /*
  id = -1;
  price = 0;
  name = "";
  image = "";
  text ="";
  */

  constructor(id = 0) {
    this.id = id;
  }

  hydrate(productJSONObject) {
    this.id = productJSONObject.id;
    this.price = productJSONObject.price;
    this.name = productJSONObject.name;
    this.image = productJSONObject.image;
    this.text = productJSONObject.text;
    let shorttext = "";
    if ( !productJSONObject.shorttext ) {
      shorttext =  this.text.substring(0,25);
    }
    this.shorttext = shorttext;
  }

  setPrice(price) {
    this.price = price;
  }
  getPrice() {
    return this.price;
  }
  setWeight(weight) {
    this.weight = weight;
  }
  getWeight() {
    return this.weight;
  }
  setImage() {
    this.image = image;
  }
  getImage() {
    return this.image;
  }
  setText(text) {
    this.text = text;
  }
  getText() {
    return this.text;
  }

}



window.addEventListener("load", function(data, event) {
  //affichage des produits
  var products = MUSICBAND.session.get("products");
  w3.displayObject("productlist", products);

  //écoute du click sur la liste des produits
  var productList = document.querySelectorAll(".addtocart");
  productList.forEach(
    function(currentNode, index, nodeList) {
        currentNode.addEventListener("click", function(e) {
          let productId = this.getAttribute("data-product-id");
          //recupération des données du produit
          let products = MUSICBAND.session.get("products").products;
          let productJSONObject = products.find(function(product) {
            return product.id == productId;
          });

          let product = new Product();
          product.hydrate(productJSONObject);

          let cartJSONObject = MUSICBAND.session.get("cart");
          let cart = new Cart();

          cart.hydrate(cartJSONObject);
          cart.addProduct(product);
          //overwrite cart storage
          MUSICBAND.session.set("cart", cart);

        });
    }
  );
});
