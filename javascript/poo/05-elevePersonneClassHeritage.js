//En tant que developpeur je veux pouvoir ajouter une note pour une matiere donnée
//En tant que developpeur je veux pouvoir ajouter une coefficient à une matière
//En tant que developpeur je veux pouvoir récupérer le coefficient d'une matière donnée, par défaut 1
//En tant que developpeur je veux pouvoir calculer la moyenne générale pondérée pour un élève


class Personne {

  //propriétés
 /* nom;
  prenom;
  */

  //constructeur
  constructor() {
    //instructions appellée par new Personne()
    this.nom = "";
    this.prenom = "";
    this.notes = {
        "math":[],
        "francais":[],
        "info":[]
    };
    this.coeff = {
        "math": 1,
        "francais": 1,
        "info": 1
    };
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

   constructor(nom, prenom, dateDeNaissance) {
      super(nom, prenom, dateDeNaissance);
      this.cursus = "";
      this.notes = {
                     "math": [],
                     "anglais":[],
                     "info":[]
                   };

      this.coeff  = {
          "math": 1,
          "anglais": 1,
          "info": 1
      }
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
     let nomMatiere;
     for (nomMatiere in this.notes ) {
       if ( nomMatiere === matiere ) {
         this.notes[nomMatiere].push(note);
       }
     }
   }

   getNotesMatiere(matiere) {
     let notesMatiere = this.notes[matiere];
     //traitement de l'erreur
     if ( notesMatiere == undefined ) {
       throw "[ERROR] La matiere " + matiere +
       " n'existe pas dans le tableau des notes : " +
       JSON.stringify(this.getNotes()) ;
     }
     console.log(notesMatiere);
     return notesMatiere;
   }

   getCoeff() {
     return this.coeff;
   }

   setCoeff(coeff) {
     this.coeff = coeff;
   }


   setCoeffMatiere(matiere, coeff) {
     for(let nomMatiere in this.coeff) {
       if(nomMatiere == matiere) {
         this.coeff[nomMatiere] = coeff;
       }
     }
   }

   getCoeffMatiere(matiere) {
      return this.coeff[matiere];
   }

   getSommeCoeff() {
      let sommeCoeff = 0;
      let coeff = this.getCoeff();
      for (let matiere in coeff) {
        sommeCoeff += coeff[matiere];
      }
      return sommeCoeff;
   }

   getMoyenneMatiere(matiere) {
     //https://putaindecode.io/fr/articles/js/array-reduce/
     let notesMatiere;
     let somme;
     try {
       notesMatiere = this.getNotesMatiere(matiere);
       somme = notesMatiere.reduce(  function(memo, val) {
                                       return memo + val;
                                     }
                                  );
     } catch(error) {
        console.log("[ERREUR] Problème d'initialisation du tableau de notes " +
                    "pour la matiere " + matiere);
     }
     let nombreDeNotes = notesMatiere.length;
     let moyenne = somme / nombreDeNotes;
     return moyenne;
   }

   /**
    * Calcul de la moyenne pondérée de toutes les matières
    */
   getMoyenneGenerale() {
      let moyenneGenerale = 0;
      let notes = this.getNotes();
      let sommeDesCoefficients = 0;
      for (let matiere in notes) {
        let coefficientMatiere = this.getCoeffMatiere(matiere);
        let moyenneMatiere = this.getMoyenneMatiere(matiere)*coefficientMatiere;
        moyenneGenerale = moyenneGenerale + moyenneMatiere;
      }
      sommeDesCoefficients = this.getSommeCoeff();
      moyenneGenerale = moyenneGenerale / sommeDesCoefficients;
      return moyenneGenerale;
   }


}


var e = new Eleve();
e.setNom("Cotillard");
e.addNoteMatiere("math", 12);
e.addNoteMatiere("math", 12);
e.addNoteMatiere("math", 11);
e.addNoteMatiere("math", 17);
e.addNoteMatiere("anglais", 11);
e.addNoteMatiere("info", 11);

e.setCoeffMatiere("math", 5);
console.log("[DEBUG] Liste des coefficients : ", e.getCoeff());
console.log("[DEBUG] Coeffcieint de math : ", e.getCoeffMatiere("math"));
console.log("[DEBUG] Moyenne des notes de maths =" +  e.getMoyenneMatiere("mathssss"));

var  notes = e.getNotes();
console.log("[DEBUG] Nom " + e.getNom());
console.log("[DEBUG] Notes : " + JSON.stringify(e.getNotes()));
console.log(notes);

console.log("[DEBUG] Somme des coeff: " + e.getSommeCoeff());

console.log("[DEBUG] Moyenne Generale = " +e.getMoyenneGenerale());
