
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

var cart = new Cart();

//cart.addProduct(product1)
//cart.addProduct(product2)
//cart.addProduct(product3)

//cart.getTotalPrice();

localStorage.setItem("cart", cart);

//populate users
var userslist = {
  "users" : [
    { id: 1, name:"Galinette", forname:"Arthur", age:"32", city:"Grenoble" },
    { id: 2, name:"Boubounette", forname:"Mimie", age:"14", city:"Valence" },
    { id: 3, name:"Lanterne", forname:"Céline", age:"24", city:"Crest" },
    { id: 4, name:"Rougeon", forname:"Antoine", age:"52", city:"Angers" }
  ] 
};

localStorage.setItem("users", userslist);

