function Eleve() {
 //initialiser des valeurs
}

//constructeur
/*
function Eleve(prenom, nom) {
   Personne.call(this, prenom, nom);
}
*/

//definition des élements (attributs/méthodes) 
//partagés par toutes les instances du type (classe) 
//Eleve

Eleve.prototype = {

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

//Eleve.prototype = new Personne();

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

