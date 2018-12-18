
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


var notes = {
  "math": [],
  "anglais": []
};

//En tant que developpeur je veux pouvoir ajouter une note pour une matiere donnée
//En tant que developpeur je veux pouvoir ajouter une coefficient à une matière
//En tant que developpeur je veux pouvoir récupérer le coefficient d'une matière donnée, par défaut 1
//En tant que developpeur je veux pouvoir calculer la moyenne pondérée pour un élève


class Eleve extends Personne 
{

   constructor() {
      this.cursus = "";
      this.notes = { "math":[], 
                     "anglais":[], 
                     "info":[]  
                   }; 
   }

   /**
    * calcule de la moyenne pondérée
    * @return Number moyenne
    */
   getMoyenne() {
     let moyenne = 0;
     //calcul
     return moyenne;
   }
 
   getNotes() {
    return this.notes;
   }

   /**
    *@param notes objet notes
    *
    */
   setNotes(notes) {
    this.notes = notes;
   }

   /**
    * Permet d'ajouter une note à une matière donnée
    * @param String matiere
    * @param Number note
    */
   addNoteMatiere(matiere, note) {
       for ( nomMatiere in this.notes ) {
           if ( nomMatiere === matiere ) {
              this.notes[nomMatiere].push(note);
           } 
       }
   }

}

var p = new Personne();
var e = new Eleve();
e.setNom("Marion Cotillard");
e.getNotes();
console.log("Nom " + e.getNom());


