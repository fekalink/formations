/************************************/
/*                                  */
/*           Déclaration            */
/*                                  */
/************************************/

//constructeur
function Personne() {
 //initialiser des valeurs
}



//constructeur
function Eleve() {
   //appel du constructeur parent
   Personne.call(this);
}


//definition des élements (attributs/méthodes) 
//partagés par toutes les instances du type (classe) 
//Eleve

Personne.prototype = {

  prenom:"",
  nom:"",
  dateDeNaissance: new Date(),

  getPrenom: function() {
  	return this.prenom;
  },
  setPrenom: function(prenom) {    
    this.prenom = prenom;
  },
  getNom: function() {
  	return this.nom;
  },
  setNom: function(nom) {
    this.nom = nom.toUpperCase();    
  },
  getDateDeNaissance: function() {
    return this.dateDeNaissance;
  },
  setDateDeNaissance: function(date) {
    this.dateDeNaissance = date;
  },
  getAge: function() {
  	let birthday = new Date(this.dateDeNaissance);  
  	let age = new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0);    
    return age;
  }

}

//"déclaration" du prototype : la classe Eleve hérite de propriétés et méthodes de la classe Personne
Eleve.prototype = new Personne();


//définition de ce qui est spécifque à la classe Eleve

Eleve.prototype.notes =  { 
     "math" : [],
     "francais" : [],
     "informatique" : []
};

Eleve.prototype.coefficients =  { 
     "math" : 1,
     "francais" : 1,
     "informatique" : 1
};

Eleve.prototype.getMoyenne = function() {
  console.log("Appel de la fonction getMoyenne()")
}


/************************************/
/*                                  */
/*           Execution              */
/*                                  */
/************************************/

//instanciation
var jean = new Eleve();
jean.setPrenom("Jean");
jean.setNom("Dupont");
dateNJean = new Date("1998/12/17");
jean.setDateDeNaissance(dateNJean);

//instanciation
var marie = new Eleve();
//initialisation
marie.setPrenom("Marie");
marie.setNom("Bastie");
dateNMarie = new Date("1997/1/1");
marie.setDateDeNaissance(dateNMarie);



//jean est une instance de la classe Elève
document.write("Jean " + jean.getNom() + " age " + jean.getAge());
document.write("<br>");
document.write("Marie " + marie.getNom()+ " age " + marie.getAge());

