
function getHttpRoot() {
  var httpRoot = window.location.protocol + "//" +window.location.host + "/";
  return httpRoot;
}  


function getScript(src) {
//   window.document.onload
  var s = document.createElement('script');
  s.type = "text/javascript";
  s.src = src;
  document.body.appendChild(s);
  log(" script added " + s.src, "INFO");
}

function log(message, level="INFO") {
  console.log("["+level+"] "+ message); 
}


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

