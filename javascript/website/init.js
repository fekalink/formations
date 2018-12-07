

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


