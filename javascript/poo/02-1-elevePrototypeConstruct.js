//En tant que developpeur je veux pouvoir réutiliser la definition d'un Eleve

//constructeur

function Eleve() {
    this.prenom="";
}

Eleve.prototype = {
  getPrenom: function() {
     return this.prenom;
   },
  setPrenom: function(prenom) {
     this.prenom = prenom;
   }

};

let eleve1 = new Eleve();
eleve1.setPrenom("Arthur");
let eleve2 = new Eleve()
eleve2.setPrenom("Marion");

console.log("Prenom Eleve 1 : " + evele1.getPrenom());
console.log("Prenom Eleve 2 : " + evele2.getPrenom());
