//En tant que developpeur je veux ajouter des fonctions à mon objet

var eleve1  =
{
   prenom: 'Jean',
   nom: 'Dupont',
   age: 18,

   notes: {
     math: {
        note:14,
        coeff:3
     },
     info: {
        note:17,
        coeff:7
     },
     anglais: {
        note: 2,
        coeff: 1
     }
   },

   getMoyenne: function () {
     let moyenne =
        ((this.notes.math.note*this.notes.math.coeff) + (this.notes.info.note*this.notes.info.coeff) + (this.notes.anglais.note*this.notes.anglais.coeff))
        /(this.notes.math.coeff + this.notes.info.coeff + this.notes.anglais.coeff)
        return moyenne;
	 },
   getNoteMath: function() {
   return this.notes.math.note;

   },

   getPrenom: function() {
     return this.prenom;
   }

};


var eleve2  =
{
   prenom: 'Marie',
   nom: 'Bastie',
   age: 19,
   notes: {
     math: {
        note:13,
        coeff:3
     },
     info: {
        note:17,
        coeff:7
     },
     anglais: {
        note: 16,
        coeff: 1
     }
   }

};

//test d'une fonction simple en vue de l'intégrer dans la définition de la classe
function arrondir(x, decimal=1) {
   let arrondi = x.toFixed(decimal);
   return arrondi;
}

var prenom = eleve2.getPrenom();
document.write("Prenom=" + prenom +"<br>");


var moyenne1 = getMoyenne(eleve1);
moyenne1 = arrondir(moyenne1, 2);

var moyenne2 = getMoyenne(eleve2);
document.write("Moyenne type of = "+(typeof moyenne2) + "<br>");
moyenne2 = arrondir(moyenne2, 2);
document.write("Moyenne type of = "+(typeof moyenne2) + "<br>");

document.write("Moyenne Eleve 1 = " + moyenne1 + "<br>" + "Moyenne Eleve 2 = " + moyenne2);
