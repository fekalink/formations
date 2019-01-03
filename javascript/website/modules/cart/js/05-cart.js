
class Cart
{
  /*
  products: [],
  totalPrice: 0,
  */
  constructor() {
    this.products = [];
  }

  hydrate(jsonObjectCart) {
    this.products = jsonObjectCart.products;
  }

  getTotalPrice() {
    var price = this.calculateTotal();
    this.totalPrice = price;
    return this.totalPrice;
  }

  calculateTotal() {
    var total = 0;

    for(var i=0;i<this.products.length;i++) {
      var product = this.products[i];
      total += product.price*product.quantity;
    }
    return total;
  }

  addProduct(product) {

    //on cherche si le produit est deja dans le panier
    let p = this.products.find(function(object) {
      return object.id == product.id;
    });
    if (p) {
    //si le produit est déjà dans le panier on incremente la quantité
    this.products = this.products.map(function(object, key, list) {
        if (object.id == p.id) {
          object.quantity += 1;
          console.log("Existing product added to cart");
        }
        return object;
      });
    } else {
      console.log("First time product in the cart !")
      product.quantity = 1;
      this.products.push(product);
    }
  }

  delProduct(product) {
    //on cherche si le produit est deja dans le panier
    let p = this.products.find(function(object) {
      return object.id == product.id;
    });
    if (p) {
    //si le produit est déjà dans le panier on incremente la quantité
    this.products = this.products.map(function(object, key, list) {
        if (object.id == p.id) {
          object.quantity -= 1;
          if (object.quantity <= 0) {
            console.log("Remove product from cart!");
            list.splice(key, 1);
            return null;
          }
        }
        return object;
      });
    }
  }

  getProduct(productId) {
    return this.products[productId];
  }

}
