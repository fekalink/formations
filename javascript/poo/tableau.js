var matieres = ['francais', 'maths', 'anglais', 'info'];

var searched = "giraffe";
if ( matieres.indexOf(searched) < 0 ) {
  console.log("La matiere " + searched + " n'est pas dans le tableau");
} else {
  console.log("La matiere " + searched + " est dans le tableau");
}


