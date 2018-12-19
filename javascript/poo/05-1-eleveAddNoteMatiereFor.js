//En tant que developpeur je veux ajouter une note à une matière

/*
Dans ce fichier on valide le fait que nous sommes capable de manipuler les
valeurs contenues dans un objet
*/

let notes =  {
     "math" : [],
     "francais" : [12, 13],
     "informatique" : []
};

notes["math"].push(12);
notes["math"].push(16);

console.log(notes);

notes["math"][0] = 11;

console.log(notes);
let notes =  {
  "math" : [],
  "francais" : [12, 13],
  "informatique" : []
};

function addNoteMatiere(matiere, note) {
  for (nomMatiere in notes) {
    if (nomMatiere == matiere) {
      notes[nomMatiere].push(note);
    }
  }

}


addNoteMatiere("informatique", 14);
addNoteMatiere("informatique", 16);
addNoteMatiere("math", 16);
addNoteMatiere("math", 1);
addNoteMatiere("francais", 19);
console.log(notes);
