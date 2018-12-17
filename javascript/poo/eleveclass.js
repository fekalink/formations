
class Personne {

  //propriétés
 /* nom;
  prenom;
  */

  //constructeur
  constructor() {
    //instructions appellée par new Personne()
    this.nom = "";
  }
  //méthodes
  getNom() {
    return this.nom;
  }

  setNom(nom) {
    this.nom = nom;
  }
 
}


class Eleve extends Personne 
{
  
   constructor() {
      this.cursus = "";
   }

   getMoyenne() {
     let moyenne = 0;
     //calcul
     return moyenne;
   }
   

}

var p = new Personne();
var e = new Eleve();
e.setNom("Marion Cotillard");
console.log("Nom " + e.getNom());


