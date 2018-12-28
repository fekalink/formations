window.addEventListener("load", function(e){

  var cart = MUSICBAND.session.get("cart");
  w3.displayObject("productlist", cart);
  //does snot work
  w3.includeHTML();

  let cartObject = new Cart();
  cartObject.hydrate(cart);
  let total = cartObject.getTotalPrice();
  document.getElementById("totalPrice").innerHTML = total;

});
