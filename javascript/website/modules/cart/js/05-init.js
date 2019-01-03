window.addEventListener("load", function(e){

  var cart = MUSICBAND.session.get("cart");
  w3.displayObject("productlist", cart);

  w3.includeHTML();

  let cartObject = new Cart();
  cartObject.hydrate(cart);
  let total = cartObject.getTotalPrice();
  document.getElementById("totalPrice").innerHTML = total;

  document.querySelectorAll('td i[class="fa fa-minus-square"]').forEach( function(o, k) {
    o.addEventListener("click", function(e) {
      let productId = o.previousSibling.getAttribute('data-product-id');
      console.log("productId=" + productId);
      let cart = MUSICBAND.session.get("cart");
      let cartObject = new Cart();
      cartObject.hydrate(cart);
      let product = MUSICBAND.session.get('cart').products.find((p) => { return p.id == productId });
      productObject = new Product(productId);
      productObject.hydrate(product);
      cartObject.delProduct(productObject);
      //overwrite cart storage
      MUSICBAND.session.set("cart", cartObject)
      w3.displayObject("productlist", MUSICBAND.session.get("cart"));
    });
  });

  document.querySelectorAll('td i[class="fa fa-plus-square"]').forEach( function(o, k) {
    o.addEventListener("click", function(e) {
      let productId = o.nextSibling.getAttribute('data-product-id');
      console.log("productId=" + productId);
      let cart = MUSICBAND.session.get("cart");
      let cartObject = new Cart();
      cartObject.hydrate(cart);
      let product = MUSICBAND.session.get('cart').products.find((p) => { return p.id == productId });
      productObject = new Product(productId);
      productObject.hydrate(product);
      cartObject.addProduct(productObject);
      //overwrite cart storage
      MUSICBAND.session.set("cart", cartObject);
      w3.displayObject("productlist", MUSICBAND.session.get("cart"));
    });
  });

});
