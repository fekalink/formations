
function getHttpRoot() {
  var httpRoot = window.location.protocol + "//" +window.location.host + "/";
}  

var cart = new Cart();

//cart.addProduct(product1)
//cart.addProduct(product2)
//cart.addProduct(product3)

//cart.getTotalPrice();

localStorage.setItem("cart", JSON.stringify(cart));

//populate users
var userslist = {
  "users" : [
    { id: 1, name:"Galinette", forname:"Arthur", age:"32", city:"Grenoble" },
    { id: 2, name:"Boubounette", forname:"Mimie", age:"14", city:"Valence" },
    { id: 3, name:"Lanterne", forname:"Céline", age:"24", city:"Crest" },
    { id: 4, name:"Rougeon", forname:"Antoine", age:"52", city:"Angers" }
  ] 
};

localStorage.setItem("users", JSON.stringify(userslist));

